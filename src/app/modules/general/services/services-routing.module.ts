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
  {
    path: 'chitaAsthal',
    loadChildren: () => import('./chitaAsthal/chitaAsthal.module')
      .then(mod => mod.ChitaAsthalModule)
  },
  {
    path: 'vishramAsthal',
    loadChildren: () => import('./vishramAsthal/vishramAsthal.module')
      .then(mod => mod.VishramAsthalModule)
  },
  {
    path: 'cremationGroundBooking',
    loadChildren: () => import('./bookSlot/bookSlot.module')
      .then(mod => mod.BookSlotModule)
  },
  {
    path: 'freezerBox',
    loadChildren: () => import('./freezerBox/freezerBox.module')
      .then(mod => mod.FreezerBoxModule)
  },
  {
    path: 'asthiVisarjan',
    loadChildren: () => import('./asthiVisarjan/asthiVisarjan.module')
      .then(mod => mod.AsthiVisarjanModule)
  },
  {
    path: 'asthiVisarjanHaridwar',
    loadChildren: () => import('./asthiVisarjanHaridwar/asthiVisarjanHaridwar.module')
      .then(mod => mod.AsthiVisarjanHaridwarModule)
  },
  {
    path: 'pandit-ji-at-cremation',
    loadChildren: () => import('./pandit-ji-at-cremation/pandit-ji-at-cremation.module')
      .then(mod => mod.PanditJiAtCremationModule)
  },
  {
    path: 'poojaSamagree',
    loadChildren: () => import('./poojaSamagree/poojaSamagree.module')
      .then(mod => mod.PoojaSamagreeModule)
  },
  {
    path: 'flowers',
    loadChildren: () => import('./flowers/flowers.module')
      .then(mod => mod.FlowersModule)
  },
  {
    path: 'funeralServices',
    loadChildren: () => import('./funeralServices/funeralServices.module')
      .then(mod => mod.FuneralServicesModule)
  },
  {
    path: 'deadBodyTransportation',
    loadChildren: () => import('./deadBodyTransportation/deadBodyTransportation.module')
      .then(mod => mod.DeadBodyTransportationModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServicesRoutingModule {

}
