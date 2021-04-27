import { Injectable } from '@angular/core';
import { AddWishlistItem, SetCategories, SetProductFavorite, SetProducts, SetSelectedCategory, SetWishlist, RemoveWishlistItem } from '@app/order/actions';
import { Category, WishlistItem } from '@app/order/models';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
import { Product } from './models/product.model';

export interface OrderStateModel {
    orderType: string,
    currentCategory: any;
    categories: Category[]
    products: Product[],
    wishlist: WishlistItem[],
    cart: object[],
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
    static currentCategory(state: OrderStateModel): any {
        return state.currentCategory;
    }

    @Selector()
    static categories(state: OrderStateModel): Category[] {
        return state.categories;
    }

    @Selector()
    static products(state: OrderStateModel): Product[] {
        return state.products;
    }

    @Selector()
    static wishlist(state: OrderStateModel): any {
        return state.wishlist;
    }

    @Selector()
    static cart(state: OrderStateModel): any {
        return state.cart;
    }

    @Action(SetCategories)
    setCategories(ctx: StateContext<OrderStateModel>, { categories }: SetCategories) {
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

    @Action(SetProductFavorite)
    setProductFavorite(ctx: StateContext<OrderStateModel>, { productId, value }: SetProductFavorite) {
        const products: Product[] = ctx.getState().products;
        const index: number = products.findIndex((item) => item.id == productId);
        const newProduct = new Product();
        Object.assign(newProduct, products[index]);
        newProduct.isFavorite = value;

        ctx.setState(
            patch({
                products: updateItem<Product>(item => item?.id === productId, newProduct)
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

    @Action(AddWishlistItem)
    addProductToWishlist(ctx: StateContext<OrderStateModel>, { item }: AddWishlistItem) {
        ctx.setState(
            patch({
                wishlist: append([item])
            })
        )
    }

    @Action(RemoveWishlistItem)
    removeProductToWishlist(ctx: StateContext<OrderStateModel>, { item }: AddWishlistItem) {
        ctx.setState(
            patch({
                wishlist: removeItem<WishlistItem>(elem => elem?.id === item.id)
            })
        )
    }
}