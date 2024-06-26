require("dotenv").config();
const express = require("express");
const TalkRouter = require("./Routes/talkroute");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions={
    origin:"*",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,};
    app.use(cors(corsOptions));
    app.use(express.json());
app.use("/ai",TalkRouter);
app.get("/",(req,res)=>{
 res.status(200).send("Welcome To Node JS Application");
})
app.listen(PORT,()=>{
 console.log(`App is Running at Port ${PORT}`);
})