import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CremationGroundComponent} from "./cremationGround.component";



const routes: Routes = [
  {path: '', component: CremationGroundComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CremationGroundRoutingModule {
}
