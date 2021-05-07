import { Injectable } from '@angular/core';
import { CartItem, Product } from '@app/core/models';
import { CartService } from '@app/core/services';
import { AddToCart, RemoveFromCart, SetCart } from '@app/core/stores';
import { CartState, CartStateModel } from '@app/core/stores/cart/cart.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
 
  @Select(CartState)
  cart$!: Observable<CartStateModel>

  constructor(    
    private cartAPI: CartService,
    private spinner: NgxSpinnerService
  ) { }

  @Dispatch()
  loadCart() {
    return this.cartAPI.getCart().pipe(
      map((cart: CartItem[]) => new SetCart(cart))
    )
  }

  @Dispatch()
  addToCart(product: Product) {
    return this.cartAPI.addToCart(product).pipe(
      map((item: CartItem) => new AddToCart(item))
    )
  }

  @Dispatch()
  removeFromCart(item:CartItem){
    return this.cartAPI.removeFromCart(item).pipe(
      map(() => new RemoveFromCart(item))
    )
  }
}