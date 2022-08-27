import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DecoratedAmbulanceRoutingModule, } from './decoratedAmbulance-routing.module';
import {DecoratedAmbulanceComponent} from "./decoratedAmbulance.component";
import {GalleryModule} from "../../gallery/gallery.module";
import {AboutModule} from "../../about/about.module";

@NgModule({
  imports: [
    CommonModule,
    DecoratedAmbulanceRoutingModule,
    AboutModule,
    GalleryModule,
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
