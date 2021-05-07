import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItemAdapter } from '@app/core/adapters';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem, Product } from '../models';

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
    return this.http.post<any>(this.baseUrl, { product }).pipe(
      map(item => this.cartItemAdapter.adapt(item))
    );
  }

  removeFromCart(item:CartItem): Observable<CartItem>{
    return this.http.delete<any>(`${this.baseUrl}/${item.id}`)
  }
}
