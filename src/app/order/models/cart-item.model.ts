import { Price } from '.';

export class CartItem {
    id!: string | number;
    name!: string;
    price!: Price;
    qty!: number;
}