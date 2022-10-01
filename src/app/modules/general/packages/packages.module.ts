import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PackagesRoutingModule} from './packages-routing.module';
import {PackagesComponent} from "./packages.component";
import {GalleryModule} from "../gallery/gallery.module";
import {MuktiModule} from "./mukti/mukti.module";
import {MokshModule} from "./moksh/moksh.module";
import {SwargModule} from "./swarg/swarg.module";
import {NirvanaModule} from "./nirvana/nirvana.module";

@NgModule({
  imports: [
    CommonModule,
    PackagesRoutingModule,
    GalleryModule,
    MuktiModule,
    MokshModule,
    NirvanaModule,
    SwargModule
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
