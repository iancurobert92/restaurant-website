import { switchMap, tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SetProductFavorite, SetProducts, SetWishlist } from '@app/order/actions';
import { Product } from '@app/order/models';
import { CategoriesService, ProductsService, WishlistService } from '@app/order/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;

  constructor(
    public cs: CategoriesService,
    public ps: ProductsService,
    public ws: WishlistService
  ) { }

  ngOnInit(): void {
    this.cs.loadCategories();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onCategorySelect(id: any): void {
    this.cs.setSelectedCategory(id);

    let products$: Observable<SetProducts>;

    if (id == "all" || id == "") {
      products$ = this.ps.loadProducts();
    } else {
      products$ = this.ps.getProductsFromCategory(id);
    }

    this.subscription = products$.subscribe({
      complete: () => this.ws.loadWishlist(),
      error: (error) => console.log(error)
    });
  }

  onAddToWishlist(data: Product): void {
    this.ws.addToWishlist(data);
  }

  onRemoveFromWishlist(data: Product): void {
    this.ws.removeFromWishlist(data);
  }
}

