import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-daily-profesor',
  templateUrl: './daily-profesor.component.html',
  styleUrls: ['./daily-profesor.component.css']
})
export class DailyProfesorComponent implements OnInit {
  

  constructor(private router: Router, 
    private userservice: UserService,) { }

  ngOnInit(): void {
  }

  getIdProfesor(): number {
    return this.userservice.getIdProfesor();
  }

  getRol():number {
    return this.userservice.getRol();
   }

  volver(){
    this.router.navigate(['dashboardProfesor']);
  }

  volverdashboard(){
    this.router.navigate(['dashboard']);
    }

    

}
