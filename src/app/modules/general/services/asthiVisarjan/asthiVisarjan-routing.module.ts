import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AsthiVisarjanComponent} from "./asthiVisarjan.component";


const routes: Routes = [
  {path: '', component: AsthiVisarjanComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsthiVisarjanRoutingModule {
}
