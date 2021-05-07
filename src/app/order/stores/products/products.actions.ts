import { Product } from '@app/core/models';

export class SetProducts {
    static readonly type = '[Products] SetAllProducts';
    constructor(public products: Product[]) { }
}