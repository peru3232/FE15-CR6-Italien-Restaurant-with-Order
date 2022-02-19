import { Injectable } from '@angular/core';
import { IDishes } from './Idishes';

@Injectable({
  providedIn: 'root'
})


export class CartService {

  items: IDishes[] =[];

  constructor() { }

  addToCart(dish: IDishes) {

  if (this.items.length == 0) {
    this.items.push(dish);
  } else if (this.items.find((val) => val.name == dish.name)) {
    dish.qtty++;
  } else {
    this.items.push(dish);
  }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
