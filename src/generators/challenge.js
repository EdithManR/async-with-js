import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';


async function fetchData (urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

async function anotherFunction(urlApi){
  function* iterate(array){
    for (let value of array){
      yield value
    }
  }
  try{
    
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
//el generator solo muestra los primeros tres elementos del array products
    const it = iterate(products);

    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);

    console.log(`Èl producto selecionado es: ${product.title}`);
    console.log(category.name);


  }catch(error){
    console.log(error);
  }
}
anotherFunction(API);



