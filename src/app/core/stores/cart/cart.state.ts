import { Injectable } from '@angular/core';
import { CartItem } from '@app/core/models';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
import { AddToCart, RemoveFromCart, SetCart } from './cart.actions';

export interface CartStateModel {
    items:CartItem[],
    currency : string,    
    taxes: number,
    delivery: number
}

@State<CartStateModel>({
    name: "cart",
    defaults: {
        items:[],
        currency : "USD",   
        taxes: 0,
        delivery:0
    }
})

@Injectable()
export class CartState {

    @Selector()
    static items(state: CartStateModel): CartItem[] { return state.items; }

    @Action(SetCart)
    setCart(ctx: StateContext<CartStateModel>, { cart }: SetCart) {
        const currentCart: CartItem[] = cart;
        const cartMap: Map<any, CartItem> = new Map<any, CartItem>();
        currentCart.forEach(item => {
            const key = item.product.id;
            if (!cartMap.has(key)) {
                cartMap.set(key, item);
                cartMap.get(key)!.qty = 0;
            }
            cartMap.get(key)!.qty++;
        })

        ctx.setState(
            patch({
                items: Array.from(cartMap.values())
            })
        )
    }

    @Action(AddToCart)
    addToCart(ctx: StateContext<CartStateModel>, { item }: AddToCart) {
        const currentCart: CartItem[] = ctx.getState().items;
        const index: number = currentCart.findIndex(elem => elem.product.id === item.product.id);
        if (index >= 0)
            item.qty = currentCart[index].qty + 1;

        ctx.setState(
            patch({
                items: index >= 0
                    ? updateItem<CartItem>(elem => elem?.product.id === item.product.id, item)
                    : append([item])
            })
        )
    }

    @Action(RemoveFromCart)
    removeFromCart(ctx: StateContext<CartStateModel>, { item }: RemoveFromCart) {
        console.log("item:", item);
        
        ctx.setState(
            patch({
                items: removeItem<CartItem>(elem => elem?.id === item.id)
            })
        )
    }
}