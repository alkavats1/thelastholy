import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MokshComponent} from "./moksh.component";


const routes: Routes = [
  {path: '', component: MokshComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MokshRoutingModule {
}
