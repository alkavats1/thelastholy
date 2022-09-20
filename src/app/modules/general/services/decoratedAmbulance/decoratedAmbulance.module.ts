import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DecoratedAmbulanceRoutingModule, } from './decoratedAmbulance-routing.module';
import {DecoratedAmbulanceComponent} from "./decoratedAmbulance.component";
import {GalleryModule} from "../../gallery/gallery.module";
import {AboutModule} from "../../about/about.module";
import {HomeModule} from "../../home/home.module";
import {PackagesModule} from "../../packages/packages.module";
import {ContactModule} from "../../contact/contact.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    DecoratedAmbulanceRoutingModule,
    AboutModule,
    GalleryModule,
    HomeModule,
    PackagesModule,
    ContactModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SharedModule,
  ],
  exports: [
    DecoratedAmbulanceComponent
  ],
  declarations: [
    DecoratedAmbulanceComponent
  ],
  providers: [],
})
export class DecoratedAmbulanceModule {
}
