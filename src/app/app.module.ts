import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core'


  // importar locales
  import localePy from '@angular/common/locales/es-PY';
  import localePt from '@angular/common/locales/pt';
  import localeEn from '@angular/common/locales/en';

  // registrar los locales con el nombre que quieras utilizar a la hora de proveer
  registerLocaleData(localePy, 'es');
  registerLocaleData(localePt, 'pt');
  registerLocaleData(localeEn, 'en')



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
import { FooterComponent } from './footer/footer.component';
import { ScanComponent } from './qr/qr.component';
import { QRCodeModule } from 'angular2-qrcode';
import { CancelComponent } from './cancel/cancel.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
/*import { NgQrScannerModule } from 'angular2-qrscanner';*/
import { ZXingScannerModule } from '@zxing/ngx-scanner';
/*import { L10nConfig, L10nLoader, TranslationModule } from 'angular-l10n';*/
import { CameraComponent } from './camera/camera.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';


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
    FooterComponent,
    ScanComponent,
    CancelComponent,
    CameraComponent
    
  ],
  imports: [
    QRCodeModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ZXingScannerModule,
    NgxScannerQrcodeModule,
    ZXingScannerModule,
    HttpClientModule,
    FormsModule,
    ZXingScannerModule,
    NgxQRCodeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added

    //TranslationModule.forRoot(l10nConfig),
  
    ],
  providers: [{provide: LOCALE_ID, useValue: 'es'/*|| HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true*/}],

  bootstrap: [AppComponent]

})

export class AppModule {}

/*
export class AppModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();}
}
*/

 
