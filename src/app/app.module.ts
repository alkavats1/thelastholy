import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from "./components/header/header.module";
import {FooterModule} from "./components/footer/footer.module";
import {AboutModule} from "./modules/general/about/about.module";
import {HomeModule} from "./modules/general/home/home.module";
import {ServicesModule} from "./modules/general/services/services.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./shared/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedService} from "./shared/shared.service";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {ErrorInterceptor} from "./_helpers/error.interceptor";
import {fakeBackendProvider} from "./_helpers/fake-backend";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  providers: [SharedService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
