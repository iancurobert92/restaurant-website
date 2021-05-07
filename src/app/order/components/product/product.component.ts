import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '@app/core/models';
import { ProductStatus } from '@app/order/enums';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  @Input() data!: Product;
  @Input() isFavorite!: boolean;
  @Output() addToWishlist: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() removeFromWishlist: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {

  }

  onFavoriteClick(data: Product): void {
    if (this.isFavorite) {
      this.removeFromWishlist.emit(data);
    } else {
      this.addToWishlist.emit(data);
    }
  }

  onCartClick(data: Product): void {
    this.addToCart.emit(data);
  }

  getStatusIcon(): string {
    switch (this.data.status) {
      case ProductStatus.Available:
        return "available.png";
      case ProductStatus.NotAvailable:
        return "not_available.png";
      case ProductStatus.ComingSoon:
        return "coming_soon.png";
      default:
        return "not_available.png";
    }
  }
}
