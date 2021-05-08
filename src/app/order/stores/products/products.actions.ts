import { Product } from '@app/core/models';

export class SetProducts {
    static readonly type = '[Products] SetProducts';
    constructor(public products: Product[]) { }
}