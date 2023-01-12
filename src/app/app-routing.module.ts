import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Components
import { LoginComponent } from './components/login/login.component';
import { LoginProfesorComponent } from './components/loginProfesor/loginProfesor.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignInProfesorComponent } from './components/sign-inProfesor/sign-inProfesor.component';

// Guards
import { AuthGuard } from './utils/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginProfesor', component: LoginProfesorComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signInProfesor', component: SignInProfesorComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
