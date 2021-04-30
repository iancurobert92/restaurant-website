import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent, NavbarComponent } from './components';
import { FindIndexPipe } from './pipes/findIndex.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    FindIndexPipe
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
    FindIndexPipe,

    CommonModule,
    HttpClientModule,
    RouterModule,

  ]
})
export class SharedModule { }
