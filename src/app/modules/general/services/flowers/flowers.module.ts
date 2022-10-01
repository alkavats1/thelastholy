import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FlowersComponent} from "./flowers.component";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {FlowersRoutingModule} from "./flowers-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FlowersRoutingModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    FlowersComponent
  ],
  declarations: [
    FlowersComponent
  ],
  providers: [],
})
export class FlowersModule {
}
