import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeModule } from '@app/home/home.module';
import { LocationsModule } from '@app/locations/locations.module';
import { OrderModule } from '@app/order/order.module';
import { SharedModule } from '@app/shared/shared.module';
import { environment } from '@environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InMemoryDataService } from './services/in-memory-data.service';
import { CartState, NavbarState, WishlistState } from './stores';

@NgModule({
  declarations: [
  ],
  imports: [
    NgbModule,
    NgxsModule.forRoot([CartState, WishlistState, NavbarState], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule,
    environment.production 
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    SharedModule,
    HomeModule,
    LocationsModule,
    OrderModule,
  ],
  exports: [
    NgbModule,
    NgxsModule,
    NgxsReduxDevtoolsPluginModule,
    NgxsLoggerPluginModule,
    NgxsDispatchPluginModule,
    NgxSpinnerModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    SharedModule,
    HomeModule,
    LocationsModule,
    OrderModule,
  ]
})
export class CoreModule { }
