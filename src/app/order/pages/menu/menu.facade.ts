import { Injectable } from '@angular/core';
import {
  AddToCart, AddToWishlist,
  RemoveFromWishlist,
  SetCart, SetCategories,
  SetProducts,
  SetSelectedCategory,
  SetWishlist
} from '@app/order/actions';
import { CartItem, Category, Product, WishlistItem } from '@app/order/models';
import { OrderState } from '@app/order/order.state';
import { CartService, CategoriesService, ProductsService, WishlistService } from '@app/order/services';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuFacade {

  @Select(OrderState.categories)
  categories$!: Observable<Category[]>

  @Select(OrderState.currentCategory)
  currentCategory$!: Observable<any>

  @Select(OrderState.products)
  products$!: Observable<Product[]>

  @Select(OrderState.wishlist)
  wishlist$!: Observable<WishlistItem[]>

  @Select(OrderState.cart)
  cart$!: Observable<CartItem[]>

  constructor(
    private categoriesAPI: CategoriesService,
    private productsAPI: ProductsService,
    private wishlistAPI: WishlistService,
    private cartAPI: CartService,
    private spinner: NgxSpinnerService
  ) { }

  @Dispatch()
  public loadCategories() {
    return this.categoriesAPI.getCategories().pipe(
      map((categories: Category[]) => new SetCategories(categories))
    )
  }

  @Dispatch()
  public setSelectedCategory(id: any) {
    return new SetSelectedCategory(id);
  }

  @Dispatch()
  loadProducts() {
    this.spinner.show();
    return this.productsAPI.getAllProducts().pipe(
      map((products: Product[]) => new SetProducts(products)),
      finalize(() => this.spinner.hide())
    )
  }

  @Dispatch()
  getProductsFromCategory(id: any) {
    this.spinner.show();
    return this.productsAPI.getProductsFromCategory(id).pipe(
      map((products: Product[]) => new SetProducts(products)),
      finalize(() => this.spinner.hide())
    )
  }

  @Dispatch()
  loadWishlist() {
    return this.wishlistAPI.getWisthlist().pipe(
      map((wishlist: WishlistItem[]) => new SetWishlist(wishlist))
    )
  }

  @Dispatch()
  addToWishlist(product: Product) {
    this.spinner.show();
    return this.wishlistAPI.addWishlistItem(product).pipe(
      map(() => {
        const item: WishlistItem = new WishlistItem();
        item.id = product.id;
        return [new AddToWishlist(item)]
      }),
      finalize(() => this.spinner.hide())
    )
  }

  @Dispatch()
  removeFromWishlist(product: Product) {
    this.spinner.show();
    return this.wishlistAPI.removeWishlistItem(product).pipe(
      map(() => {
        const item: WishlistItem = new WishlistItem();
        item.id = product.id;
        return [new RemoveFromWishlist(item)]
      }),
      finalize(() => this.spinner.hide())
    )
  }

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
}