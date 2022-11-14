import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Countries } from './country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private url = "https://restcountries.com/v3.1/"
  continents: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];
  countries: Countries = [];
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.fetchCountries('all');
  }
  filterByContinent(item: string) {
    console.log(item);

  }
  fetchCountries(parameter?: string, extras?: any) {
    this.http.get<Countries>(this.url + parameter ?? '' + '/' + extras ?? '').subscribe(res => {
      this.countries = res;
    })
  }


}
