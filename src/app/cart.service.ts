import { Injectable } from '@angular/core';
import { IDishes } from './Idishes';

@Injectable({
  providedIn: 'root'
})


export class CartService {

  items: IDishes[] =[];
  qtty: number = 0;

  constructor() { }

  addToCart(dish: IDishes) {
    if (this.items.find((val) => val.name == dish.name)) {
      dish.qtty++;
    } else {
      this.items.push(dish);
    }
  }

  removeFromCart(index:string) {
    const i:number = Number(index);
    console.log(this.items[i]);
    if (this.items[i].qtty > 1) {
      this.items[i].qtty--;
    } else {
      this.items.splice(i,1)
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
