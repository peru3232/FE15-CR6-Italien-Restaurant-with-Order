import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { dishes } from '../dishes';
import { IDishes } from '../Idishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes:IDishes[] = dishes;

  constructor(private cartService: CartService) { }

  addToCart(id:number) {
    this.cartService.addToCart(dishes[id]);
  }

  ngOnInit(): void {
  }

}
