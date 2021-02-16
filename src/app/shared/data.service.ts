 import { Injectable } from '@angular/core';

 @Injectable({
   providedIn: 'root'
 })
 export class DataService {
  private products = [
    {
      id: 1,
      name: 'egg',
      category: 'Food',
      description: 'este es un producto',
      price: 1,
    },
    {
      id: 2,
      name: 'soda',
      category: 'drink',
      description: 'este es un drink',
      price: 1,
    },
    {
      id: 3,
      name: 'Biscoff Cookies',
      category: 'Food',
      description: 'this is Cookie',
      price: 1,
    },
  ];

   //metodo que nos devuelva el array que tenemos
  getAllProducts(){
    return this.products;
  }

  //metodo filtrar por id
  getProductByid(id: any){
    return this.products.filter((product) => product.id == id)
  }
  
 }
