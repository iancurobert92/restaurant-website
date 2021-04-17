import { Injectable } from '@angular/core';
import { SetProducts } from '@app/order/actions';
import { Product } from '@app/order/models';
import { OrderState } from '@app/order/order.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { OrdersApiService } from './orders-api.service';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  @Select(OrderState.products)
  data$!: Observable<Product[]>

  constructor(
    private api: OrdersApiService,
    private spinner: NgxSpinnerService
  ) { }

  @Dispatch()
  getProducts() {
    return this.api.getAllProducts().pipe(
      map((products: Product[]) => new SetProducts(products))
    )
  }

  @Dispatch()
  getProductsFromCategory(id: any) {
    this.spinner.show();
    return this.api.getProductsFromCategory(id).pipe(
      map((products: Product[]) => new SetProducts(products)),
      finalize(() => this.spinner.hide())
    )
  }
}
