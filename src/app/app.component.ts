import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CartItem, WishlistItem } from '@app/core/models';
import { Observable } from 'rxjs';
import { AppFacade } from './app.facade';
import { NavbarState, NavbarStateModel } from './core/stores';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('contentOpenClose', [
      state('open', style({
        marginLeft: '0px'
      })),
      state('close', style({
        marginLeft: '-250px'
      })),      
      transition('close => open', animate('300ms ease-in')),
      transition('open => close', animate('300ms ease-out'))
    ]),
    trigger('sidebarOpenClose', [      
      state('open', style({
        right: '0px'
      })),
      state('close', style({
        right: '-250px'
      })),
      transition('close => open', animate('300ms ease-out')),
      transition('open => close', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit{

  cartItems$!:Observable<CartItem[]>
  wishlist$!:Observable<WishlistItem[]>
  navbar$!: Observable<NavbarStateModel>
  
  constructor(
    private facade:AppFacade
  ){}

  ngOnInit(){    
    this.facade.loadCart();
    this.cartItems$ = this.facade.cartItems$;    

    this.facade.loadWishlist();
    this.wishlist$ = this.facade.wishlist$;

    this.navbar$ = this.facade.navbar$;   
  }

  toggle(isExpanded:boolean) {
    if(isExpanded){
      this.facade.hideSidebar();
    }else{
      this.facade.showSidebar();
    }
  }
}
