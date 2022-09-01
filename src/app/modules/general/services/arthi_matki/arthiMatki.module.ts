import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleryModule} from "../../gallery/gallery.module";
import {AboutModule} from "../../about/about.module";
import {ArthiMatkiRoutingModule} from "./arthiMatki-routing.module";
import {ArthiMatkiComponent} from "./arthiMatki.component";

@NgModule({
  imports: [
    CommonModule,
    ArthiMatkiRoutingModule,
    AboutModule,
    GalleryModule,
  ],
  exports: [
    ArthiMatkiComponent
  ],
  declarations: [
    ArthiMatkiComponent
  ],
  providers: [],
})
export class ArthiMatkiModule {
}
