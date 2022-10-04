import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookSlotRoutingModule} from './bookSlot-routing.module';
import {BookSlotComponent} from "./bookSlot.component";
import {AboutModule} from "../../about/about.module";
import {PackagesModule} from "../../packages/packages.module";
import {SharedModule} from "../../../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  imports: [
    CommonModule,
    BookSlotRoutingModule,
    AboutModule,
    PackagesModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    BookSlotComponent
  ],
  declarations: [
    BookSlotComponent
  ],
  providers: [],
})
export class BookSlotModule {
}
