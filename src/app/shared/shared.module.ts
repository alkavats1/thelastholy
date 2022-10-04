import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import {SupportFormComponent} from "./supportForm/supportForm.component";
import {DialogBoxComponent} from "./dialog-box/dialogBox.component";
import {ToastrModule} from "ngx-toastr";
import {EnquiryFormComponent} from "./enquiryForm/enquiryForm.component";


@NgModule({
  declarations: [
    SupportFormComponent,
    DialogBoxComponent,
    EnquiryFormComponent

  ],
  exports: [
    SupportFormComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule.forRoot(),
  ],
})
export class SharedModule {
}
