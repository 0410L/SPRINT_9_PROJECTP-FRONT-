import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { ResultAndError } from '@zxing/ngx-scanner/lib/ResultAndError';
import { NgxScannerQrcodeModule, NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  public output: any | undefined;

  @ViewChild('action', { static: true })
  action: NgxScannerQrcodeComponent = new NgxScannerQrcodeComponent;
  // TODO something this.action

  ngOnInit(): void {
    this.action.start();
  }

  initScan(e: any) {
    if (e != '') {
      console.log('se encontro', e);
      this.action.stop();
    } else {
      console.log('No se encontro ', e);
    }
  }

  public onError(e: any): void {
    alert(e);
  }
}
