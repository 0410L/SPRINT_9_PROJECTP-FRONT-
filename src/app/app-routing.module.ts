import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardProfesorComponent } from './components/dashboardProfesor/dashboardProfesor.component';

// Components
import { LoginComponent } from './components/login/login.component';
import { LoginProfesorComponent } from './components/loginProfesor/loginProfesor.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignInProfesorComponent } from './components/sign-inProfesor/sign-inProfesor.component';

// Guards
import { AuthGuard } from './utils/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlertasComponent } from './alertas/alertas.component';
import { DailyComponent } from './daily/daily.component';
import { DailyProfesorComponent } from './daily-profesor/daily-profesor.component';
import { EditProfesorComponent } from './edit-profesor/edit-profesor.component';
import { HistorialProfesorComponent } from './historial-profesor/historial-profesor.component';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginProfesor', component: LoginProfesorComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signInProfesor', component: SignInProfesorComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboardProfesor', component: DashboardProfesorComponent, canActivate: [AuthGuard] },
  { path: 'alertas', component: AlertasComponent },
  { path: 'daily', component: DailyComponent, canActivate: [AuthGuard]  },
  { path: 'dailyProfesor', component: DailyProfesorComponent, canActivate: [AuthGuard]  },
  { path: 'editProfesor', component: EditProfesorComponent, canActivate: [AuthGuard]  },
  { path: 'historial', component: HistorialComponent, canActivate: [AuthGuard]  },
  { path: 'historialProfesor', component: HistorialProfesorComponent, canActivate: [AuthGuard]  },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
