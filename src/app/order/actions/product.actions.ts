import { Product } from '@app/order/models/product.model';

export class SetProducts {
    static readonly type = '[Product] SetAllProducts';
    constructor(public products: Product[]) { }
}