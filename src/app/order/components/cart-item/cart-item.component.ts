import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '@app/core/models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.sass']
})
export class CartItemComponent implements OnInit {

  @Input() data!:CartItem;
  @Output() remove:EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(data:CartItem){
    this.remove.emit(data);
  }

}
