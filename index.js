import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/", (req, res) => {
    console.log(req.body);
    
    const { data } = req.body;
    // console.log(data);
    res.status(201).json({
        message: "Data received",
        data: data
    })
})


app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
})
// module.exports = app;clear
