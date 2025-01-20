import { Schema } from "mongoose";
import mongoose from "mongoose";
import bcrypt from "bcrypt"; // For password hashing

const userSchema = new Schema(
  {
    authProvider: {
      type: String,
      enum: ["github", "google", "local"], // Add 'local' for email/password users
      required: true,
    },
    providerId: {
      type: String,
      unique: true, // Required for OAuth users (GitHub/Google)
      sparse: true, // Allows null values for local users
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: function () {
        return this.authProvider === "local";
      }, // Password is only required for local users
      select: false, // Exclude password from queries by default
    },
    img: {
      type: String,
      default: null, // Optional profile image
    },
    savedPosts: {
      type: [String],
      default: [], // IDs of saved posts
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password") && this.password) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

export default mongoose.model("User", userSchema);
