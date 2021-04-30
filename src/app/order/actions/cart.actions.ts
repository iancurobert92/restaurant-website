import { CartItem } from '@app/order/models';

export class SetCart {
    static readonly type = '[Cart] SetCart';
    constructor(public cart: CartItem[]) { }
}

export class AddToCart {
    static readonly type = '[Cart] AddToCart';
    constructor(public item: CartItem) { }
}

export class RemoveFromCart {
    static readonly type = '[Cart] RemoveFromCart';
    constructor(public item: CartItem) { }
}