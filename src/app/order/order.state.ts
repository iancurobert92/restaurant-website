import { SetSelectedCategory } from './actions/order.actions';
import { SetCategories, SetProducts } from '@app/order/actions';
import { Category, Product } from '@app/order/models';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { patch } from '@ngxs/store/operators';

export interface OrderStateModel {
    categories: Category[]
    products: Product[],
    currentCategory: any;
}

@State<OrderStateModel>({
    name: "order",
    defaults: {
        currentCategory: "drinks",
        categories: [],
        products: [],
    }
})

@Injectable()
export class OrderState {

    @Selector()
    static categories(state: OrderStateModel): Category[] {
        return state.categories;
    }

    @Selector()
    static currentCategory(state: OrderStateModel): any {
        return state.currentCategory;
    }

    @Selector()
    static products(state: OrderStateModel): Product[] {
        return state.products;
    }

    @Action(SetCategories)
    setCategories(ctx: StateContext<OrderStateModel>, action: SetCategories) {
        ctx.setState(patch({
            categories: action.payload
        }))
    }

    @Action(SetSelectedCategory)
    setSelectedCategory(ctx: StateContext<OrderStateModel>, action: SetSelectedCategory) {
        ctx.setState(patch({
            currentCategory: action.payload
        }))
    }

    @Action(SetProducts)
    setProducts(ctx: StateContext<OrderStateModel>, action: SetProducts) {
        ctx.setState(patch({
            products: action.payload
        }))
    }

}