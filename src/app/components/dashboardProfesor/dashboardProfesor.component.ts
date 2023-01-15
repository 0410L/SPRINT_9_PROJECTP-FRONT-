import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-profesor',
  templateUrl: './dashboardProfesor.component.html',
  styleUrls: ['./dashboardProfesor.component.css']
})
export class DashboardProfesorComponent implements OnInit {

  showmodal:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    //acció que fará el botó 'iniciar' per començar amb els textos.
 editProfesor(){
  this.router.navigate(['editProfesor']);
  }
 dailyProfesor(){
  this.router.navigate(['dailyProfesor']);
  }
historialProfesor(){
  this.router.navigate(['historialProfesor']);
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
