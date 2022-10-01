import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PackagesComponent} from "./packages.component";


const routes: Routes = [
  {path: '', component: PackagesComponent},
  {
    path: 'mukti',
    loadChildren: () => import('./mukti/mukti.module')
      .then(mod => mod.MuktiModule)
  },
  {
    path: 'moksh',
    loadChildren: () => import('./moksh/moksh.module')
      .then(mod => mod.MokshModule)
  },
  {
    path: 'nirvana',
    loadChildren: () => import('./nirvana/nirvana.module')
      .then(mod => mod.NirvanaModule)
  },
  {
    path: 'swarg',
    loadChildren: () => import('./swarg/swarg.module')
      .then(mod => mod.SwargModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule {
}
