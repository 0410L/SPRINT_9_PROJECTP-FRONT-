import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent, ZXingScannerModule } from '@zxing/ngx-scanner';
import { ResultAndError } from '@zxing/ngx-scanner/lib/ResultAndError';
import { NgxScannerQrcodeModule, NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import Swal from 'sweetalert2'
import { Result } from '@zxing/library';
import { AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/profesor.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements AfterViewInit, OnInit {
  showScanner = false;
  showSpinner = true;
  device!: MediaDeviceInfo;
  enabled = false;
  
  @ViewChild(ZXingScannerComponent)
  scanner!: ZXingScannerComponent;


  constructor(private router: Router, private userService: UserService) { }
  
  ngOnInit(){
    this.showScanner = true;
  }

  ngAfterViewInit(){
    this.showScanner = true;
    this.showSpinner = false;
  }
  
  getRol():number {
    return this.userService.getRol();
   }
 

  onCodeResult(result: string) {
    console.log(result);

    Swal.fire({
      title: "Resultado:",
      html: `<a href="${result}" target="_blank">${result}</a>`,
      text: 'Pulsa el enlace para ver',
      icon: "info",
      showCancelButton: false,
      confirmButtonColor: "#0dcaf0",
      confirmButtonText: "<span style='color:black;'>OK</span>",
      background: '#fff url(../../assets/img/sweetalert2.gif)',
      timer: 10500,
      

      
    });

    // <qr-code [value]="'${result}'">${result}</qr-code>
  }
  
  volver(){
    this.router.navigate(['dashboardProfesor']);
    this.scanner.reset();
  }

  encender(){
    this.scanner.ngOnInit();
  }

  apagar(){
    this.scanner.reset();
  }
  
}