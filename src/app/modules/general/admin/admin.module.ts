import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatTabsModule
  ],
  exports: [
    AdminComponent
  ],
  declarations: [
    AdminComponent
  ],
  providers: [],
})
export class AdminModule {
}
