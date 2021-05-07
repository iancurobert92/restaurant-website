import { Price } from "@app/core/models";
import { Product } from "./product.model";

export class CartItem {
    id!: string | number;
    product!:Product;
    qty!: number;
}