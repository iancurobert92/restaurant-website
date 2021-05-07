import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent, SelectorComponent } from './components';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { OrderRoutingModule } from './order-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderCostPipe } from './pipes/order-cost.pipe';
import { ProductStatusPipe } from './pipes/product-status.pipe';
import { CategoriesState, ProductsState } from './stores';



@NgModule({
  declarations: [
    MenuComponent,
    ProductComponent,
    SelectorComponent,
    ProductStatusPipe,
    OrderCostPipe,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    SharedModule,
    OrderRoutingModule,
    NgxsModule.forFeature([ProductsState, CategoriesState])
  ]
})
export class OrderModule { }
