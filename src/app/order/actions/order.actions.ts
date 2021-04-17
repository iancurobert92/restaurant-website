import { Category, Product } from '@app/order/models';

export class SetCategories {
    static readonly type = '[Order] Set All Categories';
    constructor(public payload: Category[]) { }
}

export class SetSelectedCategory {
    static readonly type = '[Order] Set Selected Category';
    constructor(public payload: any) { }
}


export class SetProducts {
    static readonly type = '[Order] Set All Products';
    constructor(public payload: Product[]) { }
}

