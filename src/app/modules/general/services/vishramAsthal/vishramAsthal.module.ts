import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { VishramAsthalComponent} from "./vishramAsthal.component";
import {AboutModule} from "../../about/about.module";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import { VishramAsthalRoutingModule} from "./vishramAsthal-routing.module";

@NgModule({
  imports: [
    CommonModule,
    VishramAsthalRoutingModule,
    AboutModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    VishramAsthalComponent
  ],
  declarations: [
    VishramAsthalComponent
  ],
  providers: [],
})
export class VishramAsthalModule {
}
