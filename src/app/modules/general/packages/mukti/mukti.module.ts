import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MuktiComponent} from "./mukti.component";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {MuktiRoutingModule} from "./mukti-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MuktiRoutingModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    MuktiComponent
  ],
  declarations: [
    MuktiComponent
  ],
  providers: [],
})
export class MuktiModule {
}
