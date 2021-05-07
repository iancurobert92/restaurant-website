import { Component, OnInit } from '@angular/core';
import { CartItem } from '@app/core/models';
import { CartStateModel } from '@app/core/stores';
import { Observable } from 'rxjs';
import { CartFacade } from './cart.facade';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  cart$!:Observable<CartStateModel>;

  constructor(
    private facade:CartFacade
  ) { }

  ngOnInit(): void {
    this.cart$ = this.facade.cart$;
  }

  onRemove(item:CartItem){
    this.facade.removeFromCart(item);
  }

}
