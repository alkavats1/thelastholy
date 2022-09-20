import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleryModule} from "../../gallery/gallery.module";
import {AboutModule} from "../../about/about.module";
import {ArthiMatkiRoutingModule} from "./arthiMatki-routing.module";
import {ArthiMatkiComponent} from "./arthiMatki.component";
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        ArthiMatkiRoutingModule,
        AboutModule,
        GalleryModule,
        SharedModule,
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
