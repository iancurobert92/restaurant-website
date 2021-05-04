import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent, NavbarComponent } from '@app/shared/components';
import { FindIndexPipe } from '@app/shared/pipes';


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
