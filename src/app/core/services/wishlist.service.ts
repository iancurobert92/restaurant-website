import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@app/core/models';
import { Observable } from 'rxjs';
import { WishlistItem } from '@app/core/models';

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
