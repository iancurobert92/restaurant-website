import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('toggleClick', [
      state('contentVisible', style({
        marginLeft: '0px'
      })),
      state('contentHidden', style({
        marginLeft: '-250px'
      })),
      state('sidebarVisible', style({
        right: '0px'
      })),
      state('sidebarHidden', style({
        right: '-250px'
      })),
      transition('contentHidden => contentVisible', animate('300ms ease-in')),
      transition('contentVisible => contentHidden', animate('300ms ease-out')),
      transition('sidebarHidden => sidebarVisible', animate('300ms ease-out')),
      transition('sidebarVisible => sidebarHidden', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent {

  toggleContent: string = "contentVisible";
  toggleSidebar: string = "sidebarHidden";

  toggle() {
    this.toggleContent = this.toggleContent == "contentHidden" ? "contentVisible" : "contentHidden";
    this.toggleSidebar = this.toggleSidebar == "sidebarHidden" ? "sidebarVisible" : "sidebarHidden";
  }

}
