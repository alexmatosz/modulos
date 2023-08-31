var somar = require("./modulos/somar");
var media = require("./modulos/media");
var dividir = require("./modulos/dividir");
var multiplicar= require("./modulos/multiplicar");
var mensagem= require("./modulos/mensagem");

console.log( "a soma de x e y é: "+somar(20,90));
console.log("a média de x e y é: "+media(20,90));
console.log("o produto de x e y é: "+multiplicar(20,90));
console.log("a subtrair de x e y é: "+dividir(20,90));
console.log(mensagem("alex"));