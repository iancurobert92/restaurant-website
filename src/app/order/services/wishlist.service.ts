import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, WishlistItem } from '@app/order/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private baseUrl = '/api/wishlist';

  constructor(
    private http: HttpClient
  ) { }

  getWisthlist(): Observable<WishlistItem[]> {
    return this.http.get<WishlistItem[]>(this.baseUrl);
  }

  addWishlistItem(product: Product): Observable<WishlistItem> {
    return this.http.post<WishlistItem>(`${this.baseUrl}`, { id: product.id });
  }

  removeWishlistItem(product: Product): Observable<WishlistItem> {
    return this.http.delete<WishlistItem>(`${this.baseUrl}/${product.id}`);
  }
}
