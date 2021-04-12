import { Component, Input, OnInit } from '@angular/core';
import { RestaurantLocation } from '../../models';

@Component({
  selector: 'app-locations-card',
  templateUrl: './locations-card.component.html',
  styleUrls: ['./locations-card.component.sass']
})
export class LocationsCardComponent implements OnInit {

  @Input() data!: RestaurantLocation;

  constructor() { }

  ngOnInit(): void {
  }

}
