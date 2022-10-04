import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NirvanaComponent} from "./nirvana.component";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {NirvanaRoutingModule} from "./nirvana-routing.module";

@NgModule({
  imports: [
    CommonModule,
    NirvanaRoutingModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    NirvanaComponent
  ],
  declarations: [
    NirvanaComponent
  ],
  providers: [],
})
export class NirvanaModule {
}
