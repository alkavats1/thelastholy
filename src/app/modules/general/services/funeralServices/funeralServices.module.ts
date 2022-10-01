import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FuneralServicesComponent} from "./funeralServices.component";
import {SharedModule} from "../../../../shared/shared.module";
import {GalleryModule} from "../../gallery/gallery.module";
import {FuneralServicesRoutingModule} from "./funeralServices-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FuneralServicesRoutingModule,
    GalleryModule,
    SharedModule,

  ],
  exports: [
    FuneralServicesComponent
  ],
  declarations: [
    FuneralServicesComponent
  ],
  providers: [],
})
export class FuneralServicesModule {
}
