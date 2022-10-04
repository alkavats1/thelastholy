import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SwargComponent} from "./swarg.component";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {SwargRoutingModule} from "./swarg-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SwargRoutingModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    SwargComponent
  ],
  declarations: [
    SwargComponent
  ],
  providers: [],
})
export class SwargModule {
}
