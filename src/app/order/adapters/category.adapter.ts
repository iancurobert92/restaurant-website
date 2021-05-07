import { Injectable } from "@angular/core";
import { Adapter, Category } from "@app/core/models";

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