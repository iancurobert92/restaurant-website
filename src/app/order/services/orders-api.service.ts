import { WishlistItem } from './../models/wishlist-item.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryAdapter } from '@app/order/adapters/category.adapter';
import { ProductAdapter } from '@app/order/adapters/product.adapter';
import { Category, Product } from '@app/order/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OrdersApiService {

    private categoriesUrl = '/api/categories';
    private productsUrl = '/api/products';
    private wishlistUrl = '/api/wishlist';

    constructor(
        private http: HttpClient,
        private categoryAdapter: CategoryAdapter,
        private productAdapter: ProductAdapter
    ) { }

    getCategories(): Observable<Category[]> {
        return this.http.get<any[]>(this.categoriesUrl).pipe(
            map((data: any[]) => data.map((item: any) => this.categoryAdapter.adapt(item)))
        )
    }

    getAllProducts(): Observable<Product[]> {
        return this.http.get<any[]>(this.productsUrl).pipe(
            map((data: any[]) => data.map((item: any) => this.productAdapter.adapt(item)))
        )
    }

    getProductsFromCategory(id: any): Observable<Product[]> {
        return this.http.get<any[]>(`${this.productsUrl}?category.id=${id}`).pipe(
            map((data: any[]) => data.map((item: any) => this.productAdapter.adapt(item)))
        )
    }

    updateProduct(product: Product) {
        return this.http.put<any>(`${this.productsUrl}/${product.id}`, product);
    }

    updateProductPartial(productId: any, body: any) {
        return this.http.patch(`${this.productsUrl}/${productId}`, body);
    }

    getWisthlist() {
        return this.http.get<WishlistItem[]>(this.wishlistUrl);
    }

    addWishlistItem(product: Product) {
        return this.http.post<WishlistItem>(`${this.wishlistUrl}`, { id: product.id });
    }

    removeWishlistItem(product: Product) {
        return this.http.delete<WishlistItem>(`${this.wishlistUrl}/${product.id}`);
    }
}
