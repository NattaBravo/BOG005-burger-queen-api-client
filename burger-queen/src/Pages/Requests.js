
import axios from 'axios'


//Pintar la data
async function GetProducts() {
    const token = localStorage.getItem("token")
    const url = `http://localhost:8080/products`
    const responseData = await axios(url, {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
    });
    return responseData;
  };

  //Peticiones para crear producto

  async function PostProducts() {
    const token = localStorage.getItem("token")
    const url = `http://localhost:8080/products`
    const responseData = await axios(url, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
    });
    return responseData;
  };




  export {
    GetProducts,
    PostProducts
  }