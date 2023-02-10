import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})

export class ScanComponent {
  loading: boolean = true;
  //model: Array<AlumnoValoracion> = [];
  /*data = [{
    'name': 'Oriol',
    'profile': 'Software Developer',
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

  
/*  //boton descarga png
  downloadQR() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const dataURL = 'Image/png;base64';
  
    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = this.qrCodeVal;
    link.click();
  } */
  


  /* 
    //boton descarga png
    downloadQR() {
    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = this.qrCodeVal;
    link.click();
  } */
  
  
  



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
  
