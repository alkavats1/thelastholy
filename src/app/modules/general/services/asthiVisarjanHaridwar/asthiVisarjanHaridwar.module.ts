import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AsthiVisarjanHaridwarComponent} from "./asthiVisarjanHaridwar.component";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {AsthiVisarjanHaridwarRoutingModule} from "./asthiVisarjanHaridwar-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AsthiVisarjanHaridwarRoutingModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    AsthiVisarjanHaridwarComponent
  ],
  declarations: [
    AsthiVisarjanHaridwarComponent
  ],
  providers: [],
})
export class AsthiVisarjanHaridwarModule {
}
