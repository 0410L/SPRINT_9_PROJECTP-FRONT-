import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private _userService: UserService) { }

  

  ngOnInit(): void {
  }

    //acció que fará el botó 'iniciar' per començar amb els textos.
 Daily(){
  this.router.navigate(['daily']);
  }
 Historial(){
  this.router.navigate(['historial']);
  }
Alertas(){
  this.router.navigate(['alertas']);
   }

   getUserName(): string { 
    return this._userService.getLoggedUserName();
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
