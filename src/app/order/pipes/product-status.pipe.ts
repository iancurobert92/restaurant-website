import { Pipe, PipeTransform } from '@angular/core';
import { ProductStatus } from '@app/order/enums';

@Pipe({
  name: 'productStatus'
})
export class ProductStatusPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case ProductStatus.Available:
        return "Available"
      case ProductStatus.NotAvailable:
        return "Not Available"
      case ProductStatus.ComingSoon:
        return "Coming Soon"
      default:
        return "N/A"
    }
  }
}
