import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeadBodyTransportationComponent} from "./deadBodyTransportation.component";


const routes: Routes = [
  {path: '', component: DeadBodyTransportationComponent, pathMatch: "full"},
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeadBodyTransportationRoutingModule {
}
