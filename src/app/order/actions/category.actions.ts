import { Category } from '@app/order/models/category.model';

export class SetCategories {
    static readonly type = '[Category] SetCategories';
    constructor(public categories: Category[]) { }
}

export class SetSelectedCategory {
    static readonly type = '[Category] SetSelectedCategory';
    constructor(public categoryId: any) { }
}
