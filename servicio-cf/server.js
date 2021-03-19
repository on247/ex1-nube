var express = require("express"),
    app = express();

var port = process.env.PORT || 8080;

app.get("/autor", (req, res) => {
   res.json({"autor":"Alonso Javier Lizaola Salazar"})
});

app.listen(port);
console.log("Listening on port ", port);
