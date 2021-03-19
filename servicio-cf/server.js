const express = require("express"),
    app = express();

const process = require("process");
const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL

const port = process.env.PORT || 8080;

app.use(express.json())
app.get("/autor", (req, res) => {
   res.json({"autor":"Alonso Javier Lizaola Salazar"})
});

app.listen(port);
console.log("Listening on port ", port);
console.log("API_KEY=",API_KEY)
console.log("API_URL=",API_URL)