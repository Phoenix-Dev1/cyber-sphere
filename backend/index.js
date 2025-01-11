import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";

const PORT = process.env.PORT || 3001;

const app = express();

/*
  app.get("/test", (req, res) => {
  res.status(200).send("it works!");
}); 

*/

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT} `);
});
