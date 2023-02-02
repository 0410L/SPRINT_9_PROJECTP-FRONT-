import { Component } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})

export class ScanComponent {
  data = [{
    'name': 'John Doe',
    'profile': 'Software Developer',
    'email': 'john@doe.com',
    'hobby': 'coding'
  }]
  dataToString = JSON.stringify(this.data);

  public qrCodeVal: string;
  public level: "L" | "M" | "Q" | "H";
  public width: number;
  constructor() {
    this.level = "L";
    this.qrCodeVal = "";
    this.width = 200;
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

}
  
