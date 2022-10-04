import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SwargComponent} from "./swarg.component";


const routes: Routes = [
  {path: '', component: SwargComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwargRoutingModule {
}
