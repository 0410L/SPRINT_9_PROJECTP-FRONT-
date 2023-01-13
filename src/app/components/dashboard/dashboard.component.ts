import { Component, OnInit } from '@angular/core';
import { information } from 'src/app/interfaces/information';
import { InformationService } from 'src/app/services/information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    //acció que fará el botó 'iniciar' per començar amb els textos.
 Daily(){
  this.router.navigate(['login']);
  }
 Historial(){
  this.router.navigate(['loginProfesor']);
  }
Alertas(){
  this.router.navigate(['loginProfesor']);
   }



  /*
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  listProduct: information[] = []
  listInfo: any;

  //constructor(private _InformationService: InformationService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._InformationService.getProducts().subscribe((data: information[]) => {
      this.listProduct = data;
    })
  }
*/
}
