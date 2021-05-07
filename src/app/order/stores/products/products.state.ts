import { Injectable } from '@angular/core';
import { Category, Product } from '@app/core/models';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { patch } from '@ngxs/store/operators';
import { SetProducts } from './products.actions';

export interface ProductStateModel {
    products: Product[],
}

@State<ProductStateModel>({
    name: "product",
    defaults: {
        products: [],
    }
})

@Injectable()
export class ProductsState {

    @Selector()
    static products(state: ProductStateModel): Product[] { return state.products; }

    @Action(SetProducts)
    setProducts(ctx: StateContext<ProductStateModel>, { products }: SetProducts) {
        ctx.setState(
            patch({
                products: products
            })
        )
    }
}