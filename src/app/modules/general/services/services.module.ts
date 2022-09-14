import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServicesRoutingModule} from './services-routing.module';
import {AboutModule} from "../about/about.module";
import {ServicesComponent} from "./services.component";
import {DecoratedAmbulanceRoutingModule} from "./decoratedAmbulance/decoratedAmbulance-routing.module";
import {ArthiMatkiRoutingModule} from "./arthi_matki/arthiMatki-routing.module";
import {PackagesModule} from "../packages/packages.module";

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    AboutModule,
    DecoratedAmbulanceRoutingModule,
    ArthiMatkiRoutingModule,
    PackagesModule
  ],
  exports: [
    ServicesComponent,
  ],
  declarations: [
    ServicesComponent
  ],
  providers: [],
})
export class ServicesModule {
}
