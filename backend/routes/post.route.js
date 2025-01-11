import express from "express";

const router = express.Router();

router.get("/postroute", (req, res) => {
  res.status(200).send("Post Route");
});

export default router;
