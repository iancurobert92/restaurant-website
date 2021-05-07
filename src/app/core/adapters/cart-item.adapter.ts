import { Injectable } from "@angular/core";
import { Adapter, CartItem, Price } from "../models";

@Injectable({
    providedIn: "root",
})
export class CartItemAdapter implements Adapter<CartItem>{

    adapt(item: any): CartItem {
        const cartItem = new CartItem();
        cartItem.id = item.id;
        cartItem.product = item.product;
        cartItem.qty = 1;
        return cartItem;
    }
}
