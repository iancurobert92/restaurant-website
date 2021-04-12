import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {

  @Input() backgroundImg: string = "";
  @Input() title: string = "";
  @Input() subtitle: string = "";

  constructor() { }

  ngOnInit(): void {
    const ASSETS_ROOT = "/assets/images/";
    this.backgroundImg = ASSETS_ROOT + this.backgroundImg;
  }

}
