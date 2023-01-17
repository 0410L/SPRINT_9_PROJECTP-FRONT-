import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// Modulos
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { LoginProfesorComponent } from './components/loginProfesor/loginProfesor.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignInProfesorComponent } from './components/sign-inProfesor/sign-inProfesor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardProfesorComponent } from './components/dashboardProfesor/dashboardProfesor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { WelcomeComponent } from './welcome/welcome.component';
import { DailyComponent } from './daily/daily.component';
import { HistorialComponent } from './historial/historial.component';
import { AlertasComponent } from './alertas/alertas.component';
import { EditProfesorComponent } from './edit-profesor/edit-profesor.component';
import { DailyProfesorComponent } from './daily-profesor/daily-profesor.component';
import { HistorialProfesorComponent } from './historial-profesor/historial-profesor.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    NavbarComponent,
    SpinnerComponent,
    WelcomeComponent,
    LoginComponent,
    LoginProfesorComponent,
    SignInProfesorComponent,
    DashboardProfesorComponent,
    DailyComponent,
    HistorialComponent,
    AlertasComponent,
    EditProfesorComponent,
    DailyProfesorComponent,
    HistorialProfesorComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
