const express = require("express"),
    app = express();

const process = require("process");

const port = process.env.PORT || 8080;

app.use("/app", express.static(__dirname + '/public'));
app.get("/autor", (req, res) => {
   res.json({
        "autor":"Alonso Javier Lizaola Salazar",
        "servicio":"EKS en AWS" 
    })
});
app.get("/", (req, res) => {
    res.redirect("/app");
 });
app.listen(port);
console.log("Listening on port ", port);
