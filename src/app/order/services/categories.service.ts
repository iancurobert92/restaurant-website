import { Injectable } from '@angular/core';
import { SetCategories } from '@app/order/actions';
import { Category } from '@app/order/models';
import { OrderState } from '@app/order/order.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetSelectedCategory as SetSelectedCategory } from './../actions/order.actions';
import { OrdersApiService } from './orders-api.service';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  @Select(OrderState.categories)
  data$!: Observable<Category[]>

  @Select(OrderState.currentCategory)
  currentCategory$!: Observable<any>

  constructor(private api: OrdersApiService) { }

  @Dispatch()
  public getCategories() {
    return this.api.getCategories().pipe(
      map((categories: Category[]) => new SetCategories(categories))
    )
  }

  @Dispatch()
  public setSelectedCategory(id: any) {
    return new SetSelectedCategory(id);
  }
}
