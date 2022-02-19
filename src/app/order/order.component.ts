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
  counter: number;
  itemSum: number;
  discount: number;
  service: number;
  total: number;

  info = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    tel: new FormControl(''),
    notes:new FormControl(''),
  });

  constructor(
    private cartService: CartService

    ) {
    this.counter = 0;
    this.itemSum = 0;
    this.discount = 0;
    this.service = 0;
    this.total = 0;
   }

  onSubmit(){
    console.warn('Your order has been submitted', this.info.value, this.items, Math.round((this.total-this.discount)*100)/100);
    this.items = this.cartService.clearCart();
    this.info.reset();
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.itemSum = 0;
    this.discount = 0;
    this.counter = this.items.length;
    this.items.forEach(element => this.itemSum += element.price);
    this.service = Math.round(this.itemSum) / 10;
    this.total = this.itemSum + this.service;
    if (this.total > 40) {this.discount = Math.round(this.total * 1.5) / 10}
  }

}
