import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from "./components/header/header.module";
import {FooterModule} from "./components/footer/footer.module";
import {AboutModule} from "./modules/general/about/about.module";
import {HomeModule} from "./modules/general/home/home.module";
import {ServicesModule} from "./modules/general/services/services.module";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./shared/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
