import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './../shared/shared.module';
import { LocationsCardComponent } from './components/locations-card/locations-card.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationsRoutingModule } from './locations-routing.module';


@NgModule({
  declarations: [
    LocationsComponent,
    LocationsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    LocationsRoutingModule,
  ]
})
export class LocationsModule { }
