const express = require("express");
const userRouter = require("./router/userRouter");
const authRouter = require("./router/authRouter");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3500;

app.use(bodyParser.json());
// app.use(cors);

app.use("/api", userRouter);
app.use("/api", authRouter);

app.listen(port, () => {
    console.log("Server Online!!!")
});