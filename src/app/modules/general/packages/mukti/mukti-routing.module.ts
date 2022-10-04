import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MuktiComponent} from "./mukti.component";


const routes: Routes = [
  {path: '', component: MuktiComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuktiRoutingModule {
}
