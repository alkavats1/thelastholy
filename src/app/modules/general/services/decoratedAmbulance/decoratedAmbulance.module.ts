import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DecoratedAmbulanceRoutingModule, } from './decoratedAmbulance-routing.module';
import {DecoratedAmbulanceComponent} from "./decoratedAmbulance.component";
import {GalleryModule} from "../../gallery/gallery.module";
import {AboutModule} from "../../about/about.module";
import {HomeModule} from "../../home/home.module";
import {PackagesModule} from "../../packages/packages.module";

@NgModule({
    imports: [
        CommonModule,
        DecoratedAmbulanceRoutingModule,
        AboutModule,
        GalleryModule,
        HomeModule,
        PackagesModule,
    ],
  exports: [
    DecoratedAmbulanceComponent
  ],
  declarations: [
    DecoratedAmbulanceComponent
  ],
  providers: [],
})
export class DecoratedAmbulanceModule {
}
