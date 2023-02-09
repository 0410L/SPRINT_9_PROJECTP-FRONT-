import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AlumnoValoracion } from '../interfaces/alumnoValoracion';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})

export class ScanComponent {
  loading: boolean = true;
  model: Array<AlumnoValoracion> = [];
  /*data = [{
    'name': 'John Doe',
    'profile': 'Software Developer',
    'email': 'john@doe.com',
    'hobby': 'coding'
  }]
  dataToString = JSON.stringify(this.data);*/


  public qrCodeVal: string;
  public foreground: string;
  public level: "L" | "M" | "Q" | "H";
  public width: number;
  constructor(private userservice: UserService,private router: Router,) {
    this.level = "L";
    this.qrCodeVal = "";
    this.width = 200;
    this.foreground = 'blue'
    this.loading = false;
    
  }

  



  updateLevel(newValue: "L" | "M" | "Q" | "H") {
    this.level = newValue;
  }
  updateQrInfo(newValue: string) {
    this.qrCodeVal = newValue;
  }
  updateWidth(newValue: number) {
    this.width = newValue;
  }

  volver(){
    this.router.navigate(['dashboardProfesor']);
    }
  

  getRol(): number {
    return this.userservice.getRol();
  }

  volverdashboard(){
    this.router.navigate(['dashboard']);
    }


    

}
  
