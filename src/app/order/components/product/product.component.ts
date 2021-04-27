import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '@app/order/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  @Input() data!: Product;
  @Output() addToWishlist: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() removeFromWishlist: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {

  }

  onFavoriteClick(data: Product): void {
    if (data.isFavorite) {
      this.removeFromWishlist.emit(data);
    } else {
      this.addToWishlist.emit(data);
    }
  }
}
