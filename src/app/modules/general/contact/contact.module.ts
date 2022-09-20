import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactComponent} from './contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent
  ],
  providers: [],
})
export class ContactModule {
}
