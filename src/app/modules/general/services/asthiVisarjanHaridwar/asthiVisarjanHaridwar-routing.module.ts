import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AsthiVisarjanHaridwarComponent} from "./asthiVisarjanHaridwar.component";


const routes: Routes = [
  {path: '', component: AsthiVisarjanHaridwarComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsthiVisarjanHaridwarRoutingModule {
}
