//objetos

import InternalPreviewGroup from "antd/lib/image/PreviewGroup";

var objeto = {};

var miauto = {
  marca: "toyota",
  modelo: "corola",
  anio: 2021,
  detalledelauto: function () {
    console.log(`Auto ${this.modelo} ${this.anio}`);
  }
}
(this hace referencia al objeto. en este caso "mi auto" pero en otros contextos puede hacer referencia a otra cosa)
miauto.detalledelauto(); (me trae los detalles con la funcion Interna)

miauto

miauto.marca

miauto.anio

//funcion constructura.
function auto(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}

var autonuevo = new auto("Tesla", "Model 3", "2020");
var autonuevo2 = new auto("Tesla", "Model X", "2018");
var autonuevo3 = new auto("Toyota", "Corola", "2014");


//metodos de recorrido de arrays

var articulos = [
  {
    nombre: "bici",
    costo: 3000
  },
  {
    nombre: "tv",
    costo: 2500,
  },
  {  nombre: "libro",
  costo: 320,
  },
  {
    nombre: "laptop",
    costo: 3400,
  },
  {
    nombre: "celular",
    costo: 4000,

  },
  {
    nombre: "audifonos",
    costo: 1700
  },
  {
    nombre: "teclado",
    costo: 400,
}
]

var articulosfiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500
});

articulosfiltrados

var nombrearticulo = articulos.map(function (articulo) {
  return articulo.nombre
});

nombrearticulo


//busqueda con find.

var encuentraarticulo = articulos.find(function (articulo) {
  return articulo.nombre === "laptop"
})


articulos.forEach(function(articulo){
  console.log(articulo.nombre)
});

var articulosbaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});