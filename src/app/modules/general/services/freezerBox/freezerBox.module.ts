import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FreezerBoxComponent} from "./freezerBox.component";
import {AboutModule} from "../../about/about.module";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {FreezerBoxRoutingModule} from "./freezerBox-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FreezerBoxRoutingModule,
    AboutModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    FreezerBoxComponent
  ],
  declarations: [
    FreezerBoxComponent
  ],
  providers: [],
})
export class FreezerBoxModule {
}
