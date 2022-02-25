import { Component, OnInit} from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  counter: number = 0;
  total: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.counter = this.cartService.qtty;
    this.total = this.cartService.total - this.cartService.discount;
  }

  ngDoCheck():void {
    this.ngOnInit();
  }
}
