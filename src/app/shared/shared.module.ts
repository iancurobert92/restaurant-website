import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent, NavbarComponent } from './components';
import { FindIndexPipe } from './pipes';
import { ProductsQtyPipe } from './pipes/products-qty.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    FindIndexPipe,
    ProductsQtyPipe
  ],
  imports: [
    CommonModule,
    RouterModule,   
  ],
  exports: [    
    NavbarComponent,
    HeaderComponent,
    FooterComponent,

    FindIndexPipe,
    ProductsQtyPipe,
    
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
