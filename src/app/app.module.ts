import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { PatientHomeComponent } from './home/patient-home/patient-home.component';
import { DoctorHomeComponent } from './home/doctor-home/doctor-home.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PatientHomeComponent,
    DoctorHomeComponent,
    RegisterComponent,
    NavbarComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    RouterModule
    // provider used to create fake backend
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
