import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MokshComponent} from "./moksh.component";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {MokshRoutingModule} from "./moksh-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MokshRoutingModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    MokshComponent
  ],
  declarations: [
    MokshComponent
  ],
  providers: [],
})
export class MokshModule {
}
