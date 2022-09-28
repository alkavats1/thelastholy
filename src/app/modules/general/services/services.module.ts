import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServicesRoutingModule} from './services-routing.module';
import {AboutModule} from "../about/about.module";
import {ServicesComponent} from "./services.component";
import {PackagesModule} from "../packages/packages.module";
import {BookSlotModule} from "./bookSlot/bookSlot.module";
import {ChitaAsthalModule} from "./chitaAsthal/chitaAsthal.module";
import {VishramAsthalModule} from "./vishramAsthal/vishramAsthal.module";
import {FreezerBoxModule} from "./freezerBox/freezerBox.module";
import {AsthiVisarjanModule} from "./asthiVisarjan/asthiVisarjan.module";
import {DecoratedAmbulanceModule} from "./decoratedAmbulance/decoratedAmbulance.module";
import {ArthiMatkiModule} from "./arthi_matki/arthiMatki.module";
import {AsthiVisarjanHaridwarModule} from "./asthiVisarjanHaridwar/asthiVisarjanHaridwar.module";

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    AboutModule,
    DecoratedAmbulanceModule,
    ArthiMatkiModule,
    PackagesModule,
    BookSlotModule,
    ChitaAsthalModule,
    VishramAsthalModule,
    FreezerBoxModule,
    AsthiVisarjanModule,
    AsthiVisarjanHaridwarModule
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
