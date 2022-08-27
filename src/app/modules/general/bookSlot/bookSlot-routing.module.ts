import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookSlotComponent} from "./bookSlot.component";


const routes: Routes = [
  {path: '', component: BookSlotComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSlotRoutingModule {
}
