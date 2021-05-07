import { Category, Price, Rating, Review } from '.';

export class Product {
    id!: any;
    name!: string;
    description!: string;
    image!: string;
    status!: string;
    reviews!: Review[];
    rating!: Rating;
    price!: Price;
    category!: Category;
}