import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanditJiAtCremationComponent} from "./pandit-ji-at-cremation.component";


const routes: Routes = [
  {path: '', component: PanditJiAtCremationComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanditJiAtCremationRoutingModule {
}
