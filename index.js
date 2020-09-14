const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./router");
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});
app.use(router);

try {
    mongoose.connect(
        "mongodb+srv://user:userpass@main-qk5ta.mongodb.net/photographers-app?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
} catch {
    console.log("Connection Error");
}

app.get("/", (req, res) => {
    res.send("Hello backend");
});

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
