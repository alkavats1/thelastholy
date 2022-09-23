import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChitaAsthalComponent} from "./chitaAsthal.component";



const routes: Routes = [
  {path: '', component: ChitaAsthalComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChitaAsthalRoutingModule {
}
