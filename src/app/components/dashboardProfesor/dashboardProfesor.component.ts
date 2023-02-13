import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-dashboard-profesor',
  templateUrl: './dashboardProfesor.component.html',
  styleUrls: ['./dashboardProfesor.component.css']
})
export class DashboardProfesorComponent implements OnInit {
  showmodal:any;
  showScanner = false;

  @ViewChild(ZXingScannerComponent)
  scanner: ZXingScannerComponent = new ZXingScannerComponent;

  constructor(private router: Router, private _userService: UserService) { }

  cam(){
    this.router.navigate(['cam']);
    this.showScanner = !this.showScanner;
    }

  ngOnInit(): void {
  }

    //acció que fará el botó 'iniciar' per començar amb els textos.
  editProfesor(){
    this.router.navigate(['editProfesor']);
    }
  dailyProfesor(){
    this.router.navigate(['dailyProfesor']);
    }

  alumnos(){
  this.router.navigate(['alumnos']);
    }
   
  qr(){
  this.router.navigate(['qr']);
  }

  historialAlumnos(){
  this.router.navigate(['historialAlumnos']);
  }

  

  getUserName(): string { 
  return this._userService.getLoggedUserName();
  }

  getGrupo(): string { 
  return this._userService.getGrupo();
  }

  getRol():number {
  return this._userService.getRol();
  }

  volverdashboard(){
  this.router.navigate(['dashboardProfesor']);
  }

}
