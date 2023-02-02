import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent, ZXingScannerModule } from '@zxing/ngx-scanner';
import { ResultAndError } from '@zxing/ngx-scanner/lib/ResultAndError';
import { NgxScannerQrcodeModule, NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  device!: MediaDeviceInfo;
  enabled = false;

  constructor(private zxingScannerModule: ZXingScannerModule) { }

  ngOnInit(): void {
    /*ZXingScannerModule.forRoot().then((res) => {
      this.enabled = true;
    });*/
  };

  onCodeResult(result: string) {
    console.log(result);
  }
  
 
  
}