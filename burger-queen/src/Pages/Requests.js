
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

async function PostProducts(data) {
  const token = localStorage.getItem("token")
  const url = `http://localhost:8080/products`
  
  const responseData = await axios(url, {
    method: 'POST',
    data,
    headers: {
      'content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },

  });
  return responseData;
};

//petición para eliminar productos

async function DeleteProducts(id) {
  const token = localStorage.getItem("token")
  const url = `http://localhost:8080/products/`
  
  const responseData = await axios(url + id, {
    method: 'DELETE',
    headers: {
      'content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },

  });
  return responseData;
};

// Petición para Editar Productos

async function EditProducts(data, id) {
  const token = localStorage.getItem("token")
  const url = `http://localhost:8080/products/`
  
  const responseData = await axios(url + id, {
    method: 'PUT',
    data,
    headers: {
      'content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },

  });
  return responseData;
};





export {
  GetProducts,
  PostProducts,
  DeleteProducts,
  EditProducts
}