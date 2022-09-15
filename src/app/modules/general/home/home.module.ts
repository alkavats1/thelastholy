import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from "./home.component";
import {AboutModule} from "../about/about.module";
import {PackagesModule} from "../packages/packages.module";
import {ServicesModule} from "../services/services.module";
import {ContactModule} from "../contact/contact.module";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        AboutModule,
        PackagesModule,
        ServicesModule,
        ContactModule
    ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ],
  providers: [],
})
export class HomeModule {
}
