import { Category } from "@app/core/models";

export class SetCategories {
    static readonly type = '[Categories] SetCategories';
    constructor(public categories: Category[]) { }
}

export class SetSelectedCategory {
    static readonly type = '[Categories] SetSelectedCategory';
    constructor(public categoryId: any) { }
}
