import { Injectable } from '@angular/core';
import { CartItem, Category, Product, WishlistItem } from '@app/core/models';
import { CartService, WishlistService } from '@app/core/services';
import { AddToCart, AddToWishlist, RemoveFromWishlist, SetCart, SetWishlist } from '@app/core/stores';
import { CartState } from '@app/core/stores/cart/cart.state';
import { WishlistState } from '@app/core/stores/wishlist/wishlist.state';
import { CategoriesService, ProductsService } from '@app/order/services';
import { CategoriesState, ProductsState, SetCategories, SetProducts, SetSelectedCategory } from '@app/order/stores';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuFacade {

  @Select(CategoriesState.categories)
  categories$!: Observable<Category[]>

  @Select(CategoriesState.currentCategory)
  currentCategory$!: Observable<any>

  @Select(ProductsState.products)
  products$!: Observable<Product[]>

  @Select(WishlistState.wishlist)
  wishlist$!: Observable<WishlistItem[]>

  @Select(CartState.items)
  cartItems$!: Observable<CartItem[]>

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