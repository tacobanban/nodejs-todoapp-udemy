const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
require("dotenv").config();
app.use(express.json());
app.use(express.static("./public"))


const PORT = 5000;

//ルーティング設計
app.use("/api/v1/tasks", taskRoute);

//データベースと接続
const start = async () => {
    try {
        await connectDB(porocess.env.MONGO_HEROKU_URL || process.env.MONGO_URL);
        app.listen(process.env.PORT || PORT, console.log("サーバが起動しました"));
    } catch(err) {
        console.log(err);
    }
};

start();



