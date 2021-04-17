import { Price, Category, Rating } from '@app/order/models';

export class Product {
    id!: string | number;
    name!: string;
    rating!: Rating;
    reviews!: number;
    imgSrc!: string
    price!: Price;
    description!: string;
    category!: Category;
    available!: boolean;
    favorite!: boolean;
    selected!: boolean;

    getFormattedPrice(value: number): string {
        return this.price.currency + "" + value;
    }

    getReviews(): string {
        return this.reviews + "Reviews";
    }

    getFormattedRating(): string {
        return this.rating.value.toFixed(2);
    }

    getRatingPercentage(): number {
        return (this.rating.value / this.rating.total) * 100;
    }

    getStatus(): string {
        return this.available ? "Available" : "Not Available";
    }
}