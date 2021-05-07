import { Injectable } from '@angular/core';
import { CartItem, WishlistItem } from '@app/core/models';
import { CartService, WishlistService } from '@app/core/services';
import { HideSidebar, NavbarState, NavbarStateModel, SetCart, SetWishlist, ShowSidebar } from '@app/core/stores';
import { CartState } from '@app/core/stores/cart/cart.state';
import { WishlistState } from '@app/core/stores/wishlist/wishlist.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppFacade {

  @Select(WishlistState.wishlist)
  wishlist$!: Observable<WishlistItem[]>

  @Select(CartState.items)
  cartItems$!: Observable<CartItem[]>

  @Select(NavbarState)
  navbar$!: Observable<NavbarStateModel>

  constructor(    
    private wishlistAPI: WishlistService,
    private cartAPI: CartService
  ) { }

  @Dispatch()
  loadWishlist() {
    return this.wishlistAPI.getWisthlist().pipe(
      map((wishlist: WishlistItem[]) => new SetWishlist(wishlist))
    )
  }

  @Dispatch()
  loadCart() {
    return this.cartAPI.getCart().pipe(
      map((cart: CartItem[]) => new SetCart(cart))
    )
  }

  @Dispatch()
  showSidebar(){
    return new ShowSidebar();
  }

  @Dispatch()
  hideSidebar(){
    return new HideSidebar();
  }
}