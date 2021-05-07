import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryAdapter } from '@app/order/adapters';
import { Category } from '@app/core/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl = '/api/categories';

  constructor(
    private http: HttpClient,
    private categoryAdapter: CategoryAdapter
  ) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((data: any[]) => data.map((item: any) => this.categoryAdapter.adapt(item)))
    )
  }
}
