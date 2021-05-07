import { WishlistItem } from "@app/core/models";

export class SetWishlist {
    static type = "[Wishlist] SetWishlist";
    constructor(public wishlist: WishlistItem[]) { }
}

export class AddToWishlist {
    static type = '[Wishlist] AddWishlistItem';
    constructor(public item: WishlistItem) { }
}

export class RemoveFromWishlist {
    static type = '[Wishlist] RemoveWishlistItem';
    constructor(public item: WishlistItem) { }
}