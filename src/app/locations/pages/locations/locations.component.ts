import { Component, OnInit } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { RestaurantLocation } from '../../models';
import { LocationsService } from '../../services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.sass'],
  providers: [LocationsService]
})
export class LocationsComponent implements OnInit {

  faSearch: IconDefinition = faSearch;
  locations: RestaurantLocation[] = [];

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.locationsService.getAll().subscribe(
      res => {
        this.locations = res;
      }
    )
  }

}
