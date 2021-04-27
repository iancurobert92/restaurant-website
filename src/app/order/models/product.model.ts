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
    isFavorite!: boolean;

    getFormattedPrice(value: number): string {
        return this.price.currency + "" + value;
    }

    getReviews(): string {
        return this.reviews.length + " Reviews";
    }

    getFormattedRating(): string {
        return this.rating.value.toFixed(2);
    }

    getRatingPercentage(): number {
        return (this.rating.value / this.rating.total) * 100;
    }

    getStatus(): string {
        return "status";
    }
}