import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleryModule} from "../../gallery/gallery.module";
import {AboutModule} from "../../about/about.module";
import {HomeModule} from "../../home/home.module";
import {PackagesModule} from "../../packages/packages.module";
import {ContactModule} from "../../contact/contact.module";
import {KafanRoutingModule} from "./kafan-routing.module";
import {KafanComponent} from "./kafan.component";
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    KafanRoutingModule,
    AboutModule,
    GalleryModule,
    PackagesModule,
    ContactModule,
    SharedModule,
  ],
  exports: [
    KafanComponent
  ],
  declarations: [
    KafanComponent
  ],
  providers: [],
})
export class KafanModule {
}
