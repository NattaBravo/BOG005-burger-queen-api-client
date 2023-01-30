import axios from "axios";

async function makeRequestPost(pathname, data, token = false) {

    token = localStorage.getItem("loginToken")
  
    try {
      const url = `http://localhost:8080/${pathname}`
      const res = await axios(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });
      if (res.status >= 400) {
        throw new Error('Validación incorrecta')
      }
  
      const response = await res.json();
      console.log("respuesta json ", response);
  
      return response;
    } catch (error) {
      console.error('catch request ', error);
      return null
    }
  }