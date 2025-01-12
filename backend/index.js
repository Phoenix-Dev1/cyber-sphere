import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webHookRouter from "./routes/webhook.route.js";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

/*
  app.get("/test", (req, res) => {
  res.status(200).send("it works!");
}); 

*/

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/webhooks", webHookRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    // In the production phase
    stack: error.stack,
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on Port: ${PORT} `);
});
