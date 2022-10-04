import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./_guards/auth.guard";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
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
    path: 'admin',
    loadChildren: () => import('./modules/general/admin/admin.module')
      .then(mod => mod.AdminModule),
    canActivate: [AuthGuard]
  },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
