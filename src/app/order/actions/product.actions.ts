import { Product } from '@app/order/models/product.model';

export class SetProducts {
    static readonly type = '[Product] SetAllProducts';
    constructor(public products: Product[]) { }
}

export class SetProductFavorite {
    static type = '[Product] SetProductFavorite';
    constructor(public productId: any, public value: boolean) { }
}
