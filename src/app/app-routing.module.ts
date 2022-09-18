import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/general/home/home.component";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/general/home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/general/services/services.module')
      .then(mod => mod.ServicesModule)
  },
  {
    path: 'decoratedAmbulance',
    loadChildren: () => import('./modules/general/services/decoratedAmbulance/decoratedAmbulance.module')
      .then(mod => mod.DecoratedAmbulanceModule)
  },
  {
    path: 'arthiMatki',
    loadChildren: () => import('./modules/general/services/arthi_matki/arthiMatki.module')
      .then(mod => mod.ArthiMatkiModule)
  },
  {
    path: 'kafan',
    loadChildren: () => import('./modules/general/services/kafan/kafan.module')
      .then(mod => mod.KafanModule)
  },
  {
    path: 'packages',
    loadChildren: () => import('./modules/general/packages/packages.module')
      .then(mod => mod.PackagesModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./modules/general/gallery/gallery.module')
      .then(mod => mod.GalleryModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'bookSlot',
    loadChildren: () => import('./modules/general/bookSlot/bookSlot.module')
      .then(mod => mod.BookSlotModule)
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
