import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PoojaSamagreeComponent} from "./poojaSamagree.component";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {PoojaSamagreeRoutingModule} from "./poojaSamagree-routing.module";

@NgModule({
  imports: [
    CommonModule,
    PoojaSamagreeRoutingModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    PoojaSamagreeComponent
  ],
  declarations: [
    PoojaSamagreeComponent
  ],
  providers: [],
})
export class PoojaSamagreeModule {
}
