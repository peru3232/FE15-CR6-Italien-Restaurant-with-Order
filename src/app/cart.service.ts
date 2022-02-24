import { Injectable } from '@angular/core';
import { IDishes } from './Idishes';

@Injectable({
  providedIn: 'root'
})


export class CartService {

  items: IDishes[] =[];
  qtty: number = 0;
  sum: number = 0;
  discount: number = 0;
  service: number = 0;
  total: number = 0;

  constructor() { }

  addToCart(dish: IDishes) {
    this.qtty++;
    this.sum += dish.price;
    if (this.items.find((val) => val.name == dish.name)) {
      dish.qtty++;
    } else {
      this.items.push(dish);
    }
    this.calcOrder();
  }

  removeFromCart(dish: IDishes) {
    this.qtty--;
    this.sum -= dish.price;
    if (dish.qtty > 1) {
      dish.qtty--;
    } else {
      this.items.splice(this.items.indexOf(dish),1);
    }
    this.calcOrder();
  }

  calcOrder(): void {
    this.calcReset();
    this.items.forEach(element => {
      this.sum += element.price * element.qtty
      this.qtty += element.qtty;
    });
    this.service = Math.round(this.sum) / 10;
    this.total = this.sum + this.service;
    if (this.total > 40) {this.discount = Math.round(this.total * 1.5) / 10}
  }

  calcReset(): void {
      this.sum = this.qtty = this.discount = this.service = this.total = 0;
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
    this.calcReset();
    this.items = [];
    return this.items;
  }

}
