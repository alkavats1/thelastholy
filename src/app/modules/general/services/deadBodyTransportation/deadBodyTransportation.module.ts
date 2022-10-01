import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DeadBodyTransportationRoutingModule,} from './deadBodyTransportation-routing.module';
import {DeadBodyTransportationComponent} from "./deadBodyTransportation.component";
import {GalleryModule} from "../../gallery/gallery.module";
import {PackagesModule} from "../../packages/packages.module";
import {ContactModule} from "../../contact/contact.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    DeadBodyTransportationRoutingModule,
    GalleryModule,
    PackagesModule,
    ContactModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SharedModule,
  ],
  exports: [
    DeadBodyTransportationComponent
  ],
  declarations: [
    DeadBodyTransportationComponent
  ],
  providers: [],
})
export class DeadBodyTransportationModule {
}
