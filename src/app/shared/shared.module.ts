import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent, NavbarComponent } from './components';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,

    CommonModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class SharedModule { }
