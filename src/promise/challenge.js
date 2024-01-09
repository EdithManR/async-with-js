import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
  return fetch(urlApi);
};

/*//llamado a la funciòn fetchData
fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products);
  })
  .then(()=>{
    console.log("Hola");
  })
  .catch(error => console.log(error));*/


fetchData(`${API}/products`)  // trae todos los productos desde la api
  .then(response => response.json()) // los convierte en JSON
  .then(products => {
    console.log(products) // muestra todos los productos
    return fetchData(`${API}/products/${products[0].id}`) // llama a la API y trae el 1er producto 
  })
  .then(response => response.json())
  .then(product =>{
    console.log(product.title) //muestra en consola el titulo del primer producto
    return fetchData(`${API}/categories/${product.category.id}`) //se hace llamado a la api para que traiga de las categorias  el id de la categoria del producto 1
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);// muestra el nombre de la categoría del producto 1

  })
  .catch(error => console.log(error)) // si hay algun error lo muestra en pantalla
  .finally(()=> console.log('Finaly')); // muestra el mensaje cuando se termine de ejecutar