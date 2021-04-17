import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderState } from '@app/order/order.state';
import { NgxsModule } from '@ngxs/store';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { SelectorComponent } from './components/selector/selector.component';
import { OrderRoutingModule } from './order-routing.module';
import { MenuComponent } from './pages/menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent,
    ProductComponent,
    SelectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule,
    NgxsModule.forFeature([OrderState]),
    NgxSpinnerModule
  ]
})
export class OrderModule { }
