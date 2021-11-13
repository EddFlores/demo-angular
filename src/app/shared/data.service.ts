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
      description: 'Lorem egg',
      price: 1,
    },
    {
      id: 2,
      name: 'milk',
      category: 'Drink',
      description: 'Lorem milk',
      price: 2,
    },
    {
      id: 3,
      name: 'coca cola',
      category: 'Drink',
      description: 'Lorem coca cola',
      price: 2,
    },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id:any) {
    return this.products.filter(product => product.id == id);
  }
}
