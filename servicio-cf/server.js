const express = require("express"),
    app = express();

const process = require("process");

const axios=require("axios");

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL

const port = process.env.PORT || 8080;

app.use(express.json())
app.get("/autor", (req, res) => {
   res.json({"autor":"Alonso Javier Lizaola Salazar"})
});

app.post("/analisis", async (req, res)=> {
    if(!Object.keys(req.body).includes("texto")){
        return res.json({"error":"falta el parametro texto"})
    }
    if(req.body.texto==""){
        return res.json({"error":"Texto vacio"})
    }
    let ta_req_data = {"text":req.body.texto};
    let auth={username:"apikey",password:API_KEY}
    try{
        ta_response = await axios.post(API_URL+"/v3/tone?version=2017-09-21",ta_req_data,{auth})
    }
    catch(e){
        return res.json({"error":"Fallo peticion a TA con el error:"+e.response.data.error})
    }
    let data=ta_response.data;
    let tonos=data.document_tone.tones;
    res.json(tonos)
 });

app.listen(port);
console.log("Listening on port ", port);
console.log("API_KEY=",API_KEY)
console.log("API_URL=",API_URL)