import { Injectable } from "@angular/core";
import { Adapter } from "@app/core/models/adapter";
import { CartItem, Price, Product } from '@app/order/models';

@Injectable({
    providedIn: "root",
})
export class CartItemAdapter implements Adapter<CartItem>{

    adapt(item: any): CartItem {
        const cartItem = new CartItem();
        cartItem.id = item.product.id;
        cartItem.name = item.product.name;
        cartItem.qty = 1;

        cartItem.price = new Price();
        cartItem.price.currency = item.product.price.currency;
        cartItem.price.value = item.product.price.value;
        cartItem.price.oldValue = item.product.price.oldValue;

        return cartItem;
    }
}