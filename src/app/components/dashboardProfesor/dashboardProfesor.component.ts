import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-profesor',
  templateUrl: './dashboardProfesor.component.html',
  styleUrls: ['./dashboardProfesor.component.css']
})
export class DashboardProfesorComponent implements OnInit {

  showmodal:any;

  constructor(private router: Router, private _userService: UserService) { }

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

     cam(){
      this.router.navigate(['cam']);
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
