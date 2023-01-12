import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

const weatherLog = document.querySelector('#icono')
const celsius = document.querySelector('#temperatura')

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])

    Swal.fire({
      icon: 'success',
      title: 'Nos vemos,',
      text: 'que pases un buen dia!',
      showConfirmButton: false,
      timer: 1500
    })
  }


  //// generador del temps desde API EXTERNA
  async justWeather() {
  const weatherData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=14f15cb2967f0ebbd8cde2cc84211707&lang=ca&units=metric', {
      headers: {'Accept': 'application/json'}
  })
  const weatherBox = await weatherData.json();
  
  weatherBox.innerHTML = ("<img src = " + 'http://openweathermap.org/img/wn/' + weatherBox['weather'].map((weather: { icon: any; }) => weather.icon) + "@2x.png" + " >");
  //alert(weatherLog.innerHTML);
  //celsius.innerHTML = weatherBox.main.temp.toString().split(".")[0] + (" ºC ");
  //alert(celsius.innerHTML);
  //const cambioDosDigits = celsius.split(".")[0];
}


}
