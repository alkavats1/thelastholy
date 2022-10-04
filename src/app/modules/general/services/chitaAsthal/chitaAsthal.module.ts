import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChitaAsthalComponent} from "./chitaAsthal.component";
import {AboutModule} from "../../about/about.module";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {ChitaAsthalRoutingModule} from "./chitaAsthal-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ChitaAsthalRoutingModule,
    AboutModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    ChitaAsthalComponent
  ],
  declarations: [
    ChitaAsthalComponent
  ],
  providers: [],
})
export class ChitaAsthalModule {
}
