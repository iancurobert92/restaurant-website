import { Injectable } from '@angular/core';
import {
    AddToWishlist,
    RemoveFromWishlist,
    SetCart,
    SetCategories,
    SetProducts,
    SetSelectedCategory,
    SetWishlist,
    AddToCart,
    RemoveFromCart
} from '@app/order/actions';
import { CartItem, Category, Product, WishlistItem } from '@app/order/models';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';

export interface OrderStateModel {
    orderType: string,
    currentCategory: any;
    categories: Category[]
    products: Product[],
    wishlist: WishlistItem[],
    cart: CartItem[],
    taxes: number,
    subtotal: number,
    total: number,
}

@State<OrderStateModel>({
    name: "order",
    defaults: {
        orderType: '',
        currentCategory: "all",
        categories: [],
        products: [],
        wishlist: [],
        cart: [],
        taxes: 0,
        subtotal: 0,
        total: 0
    }
})

@Injectable()
export class OrderState {

    @Selector()
    static currentCategory(state: OrderStateModel): any { return state.currentCategory; }

    @Selector()
    static categories(state: OrderStateModel): Category[] { return state.categories; }

    @Selector()
    static products(state: OrderStateModel): Product[] { return state.products; }

    @Selector()
    static wishlist(state: OrderStateModel): WishlistItem[] { return state.wishlist; }

    @Selector()
    static cart(state: OrderStateModel): CartItem[] { return state.cart; }

    @Action(SetCategories)
    setCategories(ctx: StateContext<OrderStateModel>, { categories }: SetCategories) {
        const categoryAll: Category = new Category();
        categoryAll.id = "all";
        categoryAll.name = "All Categories";
        categories.unshift(categoryAll);
        ctx.setState(
            patch({
                categories: categories
            })
        )
    }

    @Action(SetSelectedCategory)
    setSelectedCategory(ctx: StateContext<OrderStateModel>, { categoryId }: SetSelectedCategory) {
        ctx.setState(
            patch({
                currentCategory: categoryId
            })
        )
    }

    @Action(SetProducts)
    setProducts(ctx: StateContext<OrderStateModel>, { products }: SetProducts) {
        ctx.setState(
            patch({
                products: products
            })
        )
    }

    @Action(SetWishlist)
    setWishlist(ctx: StateContext<OrderStateModel>, { wishlist }: SetWishlist) {
        ctx.setState(
            patch({
                wishlist: wishlist
            })
        )
    }

    @Action(AddToWishlist)
    addToWishlist(ctx: StateContext<OrderStateModel>, { item }: AddToWishlist) {
        ctx.setState(
            patch({
                wishlist: append([item])
            })
        )
    }

    @Action(RemoveFromWishlist)
    removeFromWishlist(ctx: StateContext<OrderStateModel>, { item }: AddToWishlist) {
        ctx.setState(
            patch({
                wishlist: removeItem<WishlistItem>(elem => elem?.id === item.id)
            })
        )
    }

    @Action(SetCart)
    setCart(ctx: StateContext<OrderStateModel>, { cart }: SetCart) {
        const currentCart: CartItem[] = cart;
        const cartMap: Map<any, CartItem> = new Map<any, CartItem>();
        currentCart.forEach(item => {
            const key = item.id;
            if (!cartMap.has(key)) {
                cartMap.set(key, item);
                cartMap.get(key)!.qty = 0;
            }
            cartMap.get(key)!.qty++;
        })

        ctx.setState(
            patch({
                cart: Array.from(cartMap.values())
            })
        )
    }

    @Action(AddToCart)
    addToCart(ctx: StateContext<OrderStateModel>, { item }: AddToCart) {
        const currentCart: CartItem[] = ctx.getState().cart;
        const productExists: boolean = currentCart.findIndex(el => el.id === item.id) >= 0;
        if (productExists)
            item.qty++;

        ctx.setState(
            patch({
                cart: productExists
                    ? updateItem<CartItem>(product => product?.id === item.id, item)
                    : append([item])
            })
        )
    }

    @Action(RemoveFromCart)
    removeFromCart(ctx: StateContext<OrderStateModel>, { item }: RemoveFromCart) {
        ctx.setState(
            patch({
                cart: removeItem<CartItem>(elem => elem?.id === item.id)
            })
        )
    }
}