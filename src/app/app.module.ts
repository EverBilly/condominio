import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app.routing';
import { AuthGuard } from "./_guards/auth.guard";
import { HomeGuard } from "./_guards/home.guard";
import { LoadersCssModule } from 'angular2-loaders-css';

import { AuthService } from "./_services/auth.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RegisterComponent } from './register/register.component';

import { SimpleNotificationsModule } from 'angular2-notifications';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RecoveryComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    LoadersCssModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    HomeGuard,
    AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
