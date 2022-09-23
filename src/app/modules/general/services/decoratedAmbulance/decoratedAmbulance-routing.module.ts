import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DecoratedAmbulanceComponent} from "./decoratedAmbulance.component";


const routes: Routes = [
  {path: '', component: DecoratedAmbulanceComponent, pathMatch: "full"},
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratedAmbulanceRoutingModule {
}
