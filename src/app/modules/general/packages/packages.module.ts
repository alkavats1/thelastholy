import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PackagesRoutingModule} from './packages-routing.module';
import {PackagesComponent} from "./packages.component";
import {GalleryModule} from "../gallery/gallery.module";

@NgModule({
  imports: [
    CommonModule,
    PackagesRoutingModule,
    GalleryModule,
  ],
  exports: [
    PackagesComponent
  ],
  declarations: [
    PackagesComponent
  ],
  providers: [],
})
export class PackagesModule {
}
