import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NirvanaComponent} from "./nirvana.component";


const routes: Routes = [
  {path: '', component: NirvanaComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NirvanaRoutingModule {
}
