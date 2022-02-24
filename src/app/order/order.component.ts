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
    this.info.reset();
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.counter = this.cartService.qtty;
    this.itemSum = this.cartService.sum;
    this.discount = this.cartService.discount;
    this.service = this.cartService.service;
    this.total = this.cartService.total;
  }

  AddQtty(element:IDishes): void {
    this.cartService.addToCart(element);
    this.ngOnInit();
  }

  SubtractQtty(element:IDishes) {
    this.cartService.removeFromCart(element);
    this.ngOnInit();
  }
}
