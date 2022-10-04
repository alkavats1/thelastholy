import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KafanComponent} from "./kafan.component";


const routes: Routes = [
  {path: '', component: KafanComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KafanRoutingModule {
}
