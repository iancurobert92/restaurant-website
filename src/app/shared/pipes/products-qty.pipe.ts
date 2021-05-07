import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from '@app/core/models';

@Pipe({
  name: 'productsQty'
})
export class ProductsQtyPipe implements PipeTransform {

  transform(value: CartItem[]): number {
    return value.reduce((acc, currentItem) => acc + currentItem.qty, 0);
  }

}
