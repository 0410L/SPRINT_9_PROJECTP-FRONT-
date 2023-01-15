import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  volver(){
    this.router.navigate(['dashboard']);
    }

}
