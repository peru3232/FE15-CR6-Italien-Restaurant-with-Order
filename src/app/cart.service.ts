import { Injectable } from '@angular/core';
import { IDishes } from './Idishes';

@Injectable({
  providedIn: 'root'
})


export class CartService {

  items: IDishes[] =[];
  qtty: number = 0;
  sum: number = 0;

  constructor() { }

  addToCart(dish: IDishes) {
    this.qtty++;
    this.sum += dish.price;
    if (this.items.find((val) => val.name == dish.name)) {
      dish.qtty++;
    } else {
      this.items.push(dish);
    }
  }

  removeFromCart(dish: IDishes) {
    this.qtty--;
    this.sum -= dish.price;
    if (dish.qtty > 1) {
      dish.qtty--;
    } else {
      this.items.splice(this.items.indexOf(dish),1);
    }
  }

  getQtty() {
    return this.qtty;
  }

  getSum() {
    return this.sum;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.qtty = this.sum = 0;
    this.items = [];
    return this.items;
  }

}
