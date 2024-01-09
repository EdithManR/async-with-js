function sum(num1, num2){
  return num1 + num2;
};

function calc (num1,num2, callback){
  return callback(num1, num2);
};

console.log(calc(2,2,sum)); //no es necesario colocar los parentesis a sum porque la estariamos invocando inmediatamente. tampoco es necesario pasar los argumentos a sum, ya que en la funcion calc se le estàn pasando.


//SetTimeOut recibe como parametros: una funcion, tiempo, argumentos

setTimeout(function(){
  console.log("Hola JavaScript");
}, 5000);

function saludo(name){
  console.log(`Hola ${name}`);
}

setTimeout(saludo,2000,"Oscar");