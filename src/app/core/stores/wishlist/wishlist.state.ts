import { Injectable } from '@angular/core';
import { WishlistItem } from '@app/core/models';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { append, patch, removeItem } from '@ngxs/store/operators';
import { AddToWishlist, RemoveFromWishlist, SetWishlist } from './wishlist.actions';

export interface WishlistStateModel {
    wishlist: WishlistItem[]   
}

@State<WishlistStateModel>({
    name: "wishlist",
    defaults: {        
        wishlist: []    
    }
})

@Injectable()
export class WishlistState {

    @Selector()
    static wishlist(state: WishlistStateModel): WishlistItem[] { return state.wishlist; }

    @Action(SetWishlist)
    setWishlist(ctx: StateContext<WishlistStateModel>, { wishlist }: SetWishlist) {
        ctx.setState(
            patch({
                wishlist: wishlist
            })
        )
    }

    @Action(AddToWishlist)
    addToWishlist(ctx: StateContext<WishlistStateModel>, { item }: AddToWishlist) {
        ctx.setState(
            patch({
                wishlist: append([item])
            })
        )
    }

    @Action(RemoveFromWishlist)
    removeFromWishlist(ctx: StateContext<WishlistStateModel>, { item }: AddToWishlist) {
        ctx.setState(
            patch({
                wishlist: removeItem<WishlistItem>(elem => elem?.id === item.id)
            })
        )
    }
}