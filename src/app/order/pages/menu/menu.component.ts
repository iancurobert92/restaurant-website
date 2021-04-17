import { Component, OnInit } from '@angular/core';
import { CategoriesService, ProductsService } from '@app/order/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(public cs: CategoriesService, public ps: ProductsService) { }

  ngOnInit(): void {
    this.cs.getCategories();
  }

  onCategorySelect(id: any) {
    this.cs.setSelectedCategory(id);
    if (id == "all" || id == "")
      this.ps.getProducts()
    else
      this.ps.getProductsFromCategory(id);
  }
}
