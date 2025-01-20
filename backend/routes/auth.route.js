import express from "express";
import passport from "passport";
import {
  registerUser,
  loginUser,
  oauthLogin,
  getUserData,
  githubCallback,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Local registration
router.post("/register", registerUser);

// Local login
router.post("/login", loginUser);

// User data
router.get("/me", getUserData);

// OAuth Login/Register (GitHub)
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"], session: false }) // Disable session
);

// GitHub Callback
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login",
    session: false,
  }), // Disable session
  githubCallback
);

export default router;
