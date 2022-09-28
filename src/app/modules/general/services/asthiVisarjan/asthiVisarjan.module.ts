import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AsthiVisarjanComponent} from "./asthiVisarjan.component";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {AsthiVisarjanRoutingModule} from "./asthiVisarjan-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AsthiVisarjanRoutingModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    AsthiVisarjanComponent
  ],
  declarations: [
    AsthiVisarjanComponent
  ],
  providers: [],
})
export class AsthiVisarjanModule {
}
