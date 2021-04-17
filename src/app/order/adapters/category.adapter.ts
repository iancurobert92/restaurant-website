import { Injectable } from "@angular/core";
import { Adapter } from "@app/core/models/adapter";
import { Category } from '@app/order/models';

@Injectable({
    providedIn: "root",
})
export class CategoryAdapter implements Adapter<Category>{

    adapt(item: any): Category {
        const category = new Category();
        category.id = item.id;
        category.name = item.name;
        return category;
    }
}