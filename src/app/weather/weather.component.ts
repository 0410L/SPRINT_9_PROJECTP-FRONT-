import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  url : string = 'https://www.meteosource.com/api/v1/free/point?place_id=barcelona&sections=current&timezone=auto&language=en&units=metric&key=utzkebe4e64587x1z29gyeqm301r5c8x8l4r0009'

  weatherData! : any
  icon! : string

  constructor( ){}


  ngOnInit(): void {
    this.weatherCall()
  }

async weatherCall() {
  try {
      const response = await fetch("https://www.meteosource.com/api/v1/free/point?place_id=barcelona&sections=current&timezone=auto&language=en&units=metric&key=utzkebe4e64587x1z29gyeqm301r5c8x8l4r0009", {
          mode: "cors",
          method: 'GET',
          headers: {
              Authorization: 'OAuth oauth_consumer_key="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYXZpZC5zbG1uY0BnbWFpbC5jb20iLCJqdGkiOiIwZDVkNDAxOS03NjdhLTQ4OTctYTJmNy1lYzUzOGEwZjAxNGUiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTY2MDI5NjQ3NCwidXNlcklkIjoiMGQ1ZDQwMTktNzY3YS00ODk3LWEyZjctZWM1MzhhMGYwMTRlIiwicm9sZSI6IiJ9.E7SE08ItNrqs2uaXkZJHVAecXPP7AviLNo09HiPClMc", oauth_nonce="74yMahPJTPLWsqTVblyPzd3IqfzBONT9", oauth_signature="RHeKCjawNiTxx3B%2FMYlQCIc2d%2BQ%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1660297820", oauth_token="", oauth_version="1.0"'
          }
      });

      if (response.ok) {
          this.weatherData  = await response.json();        
          this.icon = `./assets/weather/${this.weatherData.current.icon_num}.png`;

      }
  } catch (err) {
      console.error(err);
  }
}




}
