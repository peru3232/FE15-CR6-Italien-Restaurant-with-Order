import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IDishes } from '../Idishes';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  items: IDishes[] =[];
  counter: number = 0;
  itemSum: number = 0;
  discount: number = 0;
  service: number = 0;
  total: number = 0;

  info = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    tel: new FormControl(''),
    notes:new FormControl(''),
  });

  constructor(
    private cartService: CartService
  ) { }

  onSubmit(){
    console.warn('Your order has been submitted', this.info.value, this.items, Math.round((this.total-this.discount)*100)/100);
    this.items = this.cartService.clearCart();
    this.calcReset();
    this.info.reset();
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calcOrder();
  }

  calcOrder(): void {
    this.calcReset();
    this.items.forEach(element => {
      this.itemSum += element.price * element.qtty
      this.counter += element.qtty;
    });
    this.service = Math.round(this.itemSum) / 10;
    this.total = this.itemSum + this.service;
    if (this.total > 40) {this.discount = Math.round(this.total * 1.5) / 10}
  }

  calcReset(): void {
      this.itemSum = this.counter = this.discount = 0;
  }

  AddQtty(name:string): void {
    this.items.forEach(element => {
      if (element.name == name) {
        this.cartService.addToCart(element)
      };
    });
    this.calcOrder();
  }

  SubtractQtty(name:string) {
    for (let index in this.items) {
      if (this.items[index].name == name) {
        this.cartService.removeFromCart(index);
      }
    }
    this.calcOrder();
  }
}
