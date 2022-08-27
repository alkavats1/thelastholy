import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookSlotRoutingModule} from './bookSlot-routing.module';
import {BookSlotComponent} from "./bookSlot.component";
import {AboutModule} from "../about/about.module";
import {PackagesModule} from "../packages/packages.module";

@NgModule({
  imports: [
    CommonModule,
    BookSlotRoutingModule,
    AboutModule,
    PackagesModule
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
