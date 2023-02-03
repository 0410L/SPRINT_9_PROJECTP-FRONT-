import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent, ZXingScannerModule } from '@zxing/ngx-scanner';
import { ResultAndError } from '@zxing/ngx-scanner/lib/ResultAndError';
import { NgxScannerQrcodeModule, NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import Swal from 'sweetalert2'
import { Result } from '@zxing/library';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements AfterViewInit {
  showScanner = false;
  showSpinner = true;
  device!: MediaDeviceInfo;
  enabled = false;
  

  constructor() { }

  ngAfterViewInit(){
    this.showScanner = true;
    this.showSpinner = false;
  }
  
 

  onCodeResult(result: string) {
    console.log(result);

    Swal.fire({
      title: "Resultado:",
      html: `<a href="${result}" target="_blank">${result}</a>`,
      icon: "info",
      showCancelButton: true,
      cancelButtonText: "Cerrar",
      background: '#fff url(../../assets/img/robot2.gif)',
      timer: 7500
      
    });

    
    


    /*Swal.fire({
      icon: 'success',
      text: result,
      showConfirmButton: false,
      timer: 2000,
    })*/
   


   
   
  }
  
  
  
}