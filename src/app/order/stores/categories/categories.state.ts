import { Injectable } from '@angular/core';
import { Category } from '@app/core/models';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { patch } from '@ngxs/store/operators';
import { SetCategories, SetSelectedCategory } from './categories.actions';

export interface CategoriesStateModel {
    currentCategory: any;
    categories: Category[]
}

@State<CategoriesStateModel>({
    name: "categories",
    defaults: {       
        currentCategory: "all",
        categories: []        
    }
})

@Injectable()
export class CategoriesState {

    @Selector()
    static currentCategory(state: CategoriesStateModel): any { return state.currentCategory; }

    @Selector()
    static categories(state: CategoriesStateModel): Category[] { return state.categories; }

    @Action(SetCategories)
    setCategories(ctx: StateContext<CategoriesStateModel>, { categories }: SetCategories) {
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
    setSelectedCategory(ctx: StateContext<CategoriesStateModel>, { categoryId }: SetSelectedCategory) {
        ctx.setState(
            patch({
                currentCategory: categoryId
            })
        )
    }
}