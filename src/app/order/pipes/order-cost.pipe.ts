import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from '@app/core/models';
import { ProductStatus } from '@app/order/enums';

@Pipe({
  name: 'orderCost'
})
export class OrderCostPipe implements PipeTransform {

  transform(value: CartItem[]): number {
    return value.reduce((acc, item) => { return acc + (item.qty * item.product.price.value)}, 0)
  }
}
