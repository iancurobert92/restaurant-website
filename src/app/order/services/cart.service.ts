import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItemAdapter } from '@app/order/adapters';
import { CartItem, Product } from '@app/order/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = '/api/cart';

  constructor(
    private http: HttpClient,
    private cartItemAdapter: CartItemAdapter
  ) { }

  getCart(): Observable<CartItem[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((data: any[]) => data.map(item => this.cartItemAdapter.adapt(item)))
    )
  }

  addToCart(product: Product): Observable<CartItem> {
    return this.http.post<any>(this.baseUrl, {
      product: {
        id: product.id,
        name: product.name,
        price: product.price
      }
    }).pipe(
      map(item => this.cartItemAdapter.adapt(item))
    );
  }
}
