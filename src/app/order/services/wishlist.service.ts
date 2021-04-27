import { Injectable } from '@angular/core';
import { AddWishlistItem, RemoveWishlistItem, SetProductFavorite, SetWishlist } from '@app/order/actions';
import { Product, WishlistItem } from '@app/order/models';
import { OrderState } from '@app/order/order.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { OrdersApiService } from './orders-api.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  @Select(OrderState.products)
  data$!: Observable<Product[]>

  constructor(
    private api: OrdersApiService,
    private spinner: NgxSpinnerService
  ) { }

  @Dispatch()
  loadWishlist() {
    this.spinner.show();
    return this.api.getWisthlist().pipe(
      map((wishlist: WishlistItem[]) => new SetWishlist(wishlist)),
      finalize(() => this.spinner.hide())
    )
  }

  @Dispatch()
  addToWishlist(product: Product) {
    this.spinner.show();
    return this.api.addWishlistItem(product).pipe(
      map(() => {
        const item: WishlistItem = new WishlistItem();
        item.id = product.id;
        return [new SetProductFavorite(product.id, true), new AddWishlistItem(item)]
      }),
      finalize(() => this.spinner.hide())
    )
  }

  @Dispatch()
  removeFromWishlist(product: Product) {
    this.spinner.show();
    return this.api.removeWishlistItem(product).pipe(
      map(() => {
        const item: WishlistItem = new WishlistItem();
        item.id = product.id;
        return [new SetProductFavorite(product.id, false), new RemoveWishlistItem(item)]
      }),
      finalize(() => this.spinner.hide())
    )
  }
}
