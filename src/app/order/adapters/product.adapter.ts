import { Injectable } from "@angular/core";
import { Adapter } from "@app/core/models/adapter";
import { Category, Price, Product, Rating, Review } from "../models";

@Injectable({
    providedIn: "root",
})
export class ProductAdapter implements Adapter<Product>{

    adapt(item: any): Product {
        let product = new Product();

        product.id = item.id;
        product.name = item.name;
        product.image = item.image;
        product.description = item.description;
        product.isFavorite = false;

        product.category = new Category();
        product.category.id = item.category.id;
        product.category.name = item.category.name;

        product.rating = new Rating();
        product.rating.value = item.rating.value;
        product.rating.total = item.rating.total;

        product.price = new Price();
        product.price.value = item.price.value;
        product.price.oldValue = item.price.oldValue;
        product.price.currency = item.price.currency;

        product.reviews = [];
        item.reviews.forEach((item: any) => {
            let review: Review = new Review();
            review.userName = item.userName;
            review.message = item.message;
            product.reviews.push(review);
        })


        return product;
    }
}