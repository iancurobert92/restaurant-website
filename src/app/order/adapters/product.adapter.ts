import { Injectable } from "@angular/core";
import { Adapter } from "@app/core/models/adapter";
import { Price, Product, Rating } from "../models";
import { Category } from "../models/category.model";

@Injectable({
    providedIn: "root",
})
export class ProductAdapter implements Adapter<Product>{

    adapt(item: any): Product {
        const product = new Product();

        product.name = item.name;
        product.reviews = item.reviews;
        product.imgSrc = item.imgSrc;
        product.description = item.description;
        product.available = item.available;
        product.favorite = item.favorite;
        product.selected = item.selected;

        product.category = new Category();
        product.category.id = item.categoryId;
        product.category.name = item.categoryName;

        product.rating = new Rating();
        product.rating.value = item.rating.value;
        product.rating.total = item.rating.total;

        product.price = new Price();
        product.price.value = item.price.value;
        product.price.oldValue = item.price.oldValue;
        product.price.currency = item.price.currency;

        return product;
    }
}