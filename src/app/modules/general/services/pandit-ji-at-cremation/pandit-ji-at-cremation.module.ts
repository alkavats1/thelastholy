import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PanditJiAtCremationComponent} from "./pandit-ji-at-cremation.component";
import {AboutModule} from "../../about/about.module";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {PanditJiAtCremationRoutingModule} from "./pandit-ji-at-cremation-routing.module";

@NgModule({
  imports: [
    CommonModule,
    PanditJiAtCremationRoutingModule,
    AboutModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    PanditJiAtCremationComponent
  ],
  declarations: [
    PanditJiAtCremationComponent
  ],
  providers: [],
})
export class PanditJiAtCremationModule {
}
