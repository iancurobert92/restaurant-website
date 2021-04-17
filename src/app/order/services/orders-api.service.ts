import { ProductAdapter } from '@app/order/adapters/product.adapter';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryAdapter } from '@app/order/adapters/category.adapter';
import { Category, Product } from '@app/order/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OrdersApiService {

    private categoriesUrl = '/api/categories';
    private productsUrl = '/api/products';

    constructor(
        private http: HttpClient,
        private categoryAdapter: CategoryAdapter,
        private productAdapter: ProductAdapter
    ) { }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.categoriesUrl).pipe(
            map((data: any[]) => data.map((item: any) => this.categoryAdapter.adapt(item)))
        )
    }

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl).pipe(
            map((data: any[]) => data.map((item: any) => this.productAdapter.adapt(item)))
        )
    }

    getProductsFromCategory(id: any): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.productsUrl}?q=${id}`).pipe(
            map((data: any[]) => data.map((item: any) => this.productAdapter.adapt(item)))
        )
    }
}
