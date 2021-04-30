import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@app/order/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductAdapter } from '@app/order/adapters';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = '/api/products';

  constructor(
    private http: HttpClient,
    private productAdapter: ProductAdapter
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((data: any[]) => data.map((item: any) => this.productAdapter.adapt(item)))
    )
  }

  getProductsFromCategory(id: any): Observable<Product[]> {
    return this.http.get<any[]>(`${this.baseUrl}?category.id=${id}`).pipe(
      map((data: any[]) => data.map((item: any) => this.productAdapter.adapt(item)))
    )
  }
}
