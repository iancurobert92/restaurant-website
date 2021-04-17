import { SetCategories, SetProducts } from '@app/order/actions';
import { Category, Product } from '@app/order/models';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { patch } from '@ngxs/store/operators';

export interface AppStateModel {

}

@State<AppStateModel>({
    name: "app"
})

@Injectable()
export class AppState {

}