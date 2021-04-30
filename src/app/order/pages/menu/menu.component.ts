import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryType } from '@app/order/enums';
import { Product } from '@app/order/models';
import { MenuFacade } from './menu.facade';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit, OnDestroy {

  constructor(
    public facade: MenuFacade
  ) { }

  ngOnInit(): void {
    this.facade.loadCategories();
    this.facade.loadWishlist();
    this.facade.loadCart();
  }

  ngOnDestroy(): void {

  }

  onCategorySelect(id: any): void {
    this.facade.setSelectedCategory(id);

    if (id == CategoryType.All) {
      this.facade.loadProducts();
    } else {
      this.facade.getProductsFromCategory(id);
    }
  }

  onAddToWishlist(data: Product): void {
    this.facade.addToWishlist(data);
  }

  onRemoveFromWishlist(data: Product): void {
    this.facade.removeFromWishlist(data);
  }

  onAddToCart(data: Product): void {
    this.facade.addToCart(data);
  }

}

