import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@app/order/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  @Input() data!: Product;

  constructor() { }

  ngOnInit(): void {

  }
}
