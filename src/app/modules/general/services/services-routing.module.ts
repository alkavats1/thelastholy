import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServicesComponent} from "./services.component";


const routes: Routes = [
  {path: '', component: ServicesComponent},
  {
      path: 'decoratedAmbulance',
      loadChildren: () => import('./decoratedAmbulance/decoratedAmbulance.module')
        .then(mod => mod.DecoratedAmbulanceModule)
    },
      {
        path: 'arthiMatki',
        loadChildren: () => import('./arthi_matki/arthiMatki.module')
          .then(mod => mod.ArthiMatkiModule)
      },
      {
        path: 'kafan',
        loadChildren: () => import('./kafan/kafan.module')
          .then(mod => mod.KafanModule)
      },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServicesRoutingModule {

}
