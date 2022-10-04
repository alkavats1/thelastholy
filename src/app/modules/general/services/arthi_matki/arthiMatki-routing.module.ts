import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArthiMatkiComponent} from "./arthiMatki.component";


const routes: Routes = [
  {path: '', component: ArthiMatkiComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArthiMatkiRoutingModule {
}
