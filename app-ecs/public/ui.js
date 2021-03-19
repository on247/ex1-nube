let SERVICE_URL="https://alonsol-ta-test.mybluemix.net/analisis"
let text_input=document.getElementById("text");
let resultados=document.getElementById("resultados")
let analizar= async () =>{
  resultados.innerHTML=``;
  let text=text_input.value;
  let req_data=JSON.stringify({"texto":text});
  let req_options={
    method:"POST",
    body:req_data,
    headers: {
      'Content-Type': 'application/json'
    },
  }
  try{
    response=await fetch(SERVICE_URL,req_options);
    if(response.ok){
      let data=await response.json()
      if(data.error){
        resultados.innerHTML=`<p>Error: ${data.error} </p>` 
      }
      else{
        if(data.length>0){
          for(tono of data){
            resultados.innerHTML+=`<p>Tono: ${tono.tone_name} - Valor: ${tono.score} </p>`
          }
        }
        else{
          resultados.innerHTML=`<p>No hay tonos </p>`
        }
      }
    }
    else{
      resultados.innerHTML=`<p>Error: ${e} </p>`
    }
  }
  catch(e){
  alert(e.message)
  }
}
document.getElementById("enviar").addEventListener("click",analizar);