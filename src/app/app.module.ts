import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ASLComponent } from './asl/asl.component';
import {HttpClientModule} from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { LearnComponent } from './learn/learn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ASLComponent,
    SettingsComponent,
    AboutComponent,
    LearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
