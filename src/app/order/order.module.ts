import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderState } from '@app/order/order.state';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent, SelectorComponent } from './components';
import { OrderRoutingModule } from './order-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductStatusPipe } from './pipes/product-status.pipe';



@NgModule({
  declarations: [
    MenuComponent,
    ProductComponent,
    SelectorComponent,
    ProductStatusPipe
  ],
  imports: [
    SharedModule,
    OrderRoutingModule,
    NgxsModule.forFeature([OrderState])
  ]
})
export class OrderModule { }
