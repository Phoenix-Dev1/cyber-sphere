import express from "express";
import {
  registerUser,
  loginUser,
  oauthLogin,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Local registration
router.post("/register", registerUser);

// Local login
router.post("/login", loginUser);

// OAuth login/register (GitHub/Google)
router.post("/oauth", oauthLogin);

export default router;
