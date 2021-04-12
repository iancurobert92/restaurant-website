import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    MenuComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
