import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'cart', component: CartComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
