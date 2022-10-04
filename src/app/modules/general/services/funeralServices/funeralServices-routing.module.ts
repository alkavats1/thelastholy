import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FuneralServicesComponent} from "./funeralServices.component";


const routes: Routes = [
  {path: '', component: FuneralServicesComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuneralServicesRoutingModule {
}
