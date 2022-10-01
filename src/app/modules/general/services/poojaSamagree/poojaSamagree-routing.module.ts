import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PoojaSamagreeComponent} from "./poojaSamagree.component";


const routes: Routes = [
  {path: '', component: PoojaSamagreeComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoojaSamagreeRoutingModule {
}
