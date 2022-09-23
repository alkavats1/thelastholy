import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CremationGroundComponent} from "./cremationGround.component";
import {AboutModule} from "../../about/about.module";
import {PackagesModule} from "../../packages/packages.module";
import {SharedModule} from "../../../../shared/shared.module";
import {ArthiMatkiRoutingModule} from "../arthi_matki/arthiMatki-routing.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {CremationGroundRoutingModule} from "./cremationGround-routing.module";

@NgModule({
  imports: [
    CommonModule,
    CremationGroundRoutingModule,
    AboutModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    CremationGroundComponent
  ],
  declarations: [
    CremationGroundComponent
  ],
  providers: [],
})
export class CremationGroundModule {
}
