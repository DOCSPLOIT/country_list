import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { Countries } from './country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  private url = "https://restcountries.com/v3.1/"
  continents: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];
  countries: Countries = [];
  loading = false;
  @ViewChild('input') input?: ElementRef;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.fetchCountries('all', true, 'fields=name,capital,population,region,flags');
  }
  ngAfterViewInit(): void {
    fromEvent(this.input!.nativeElement, 'input')
      .pipe(map((event: any) => (event.target as HTMLInputElement).value))
      .pipe(debounceTime(2000))
      .pipe(distinctUntilChanged())
      .subscribe(data => this.searchCountry(data));
  }
  filterByContinent(item: string) {
    this.fetchCountries('region', false, item)
  }
  fetchCountries(parameter?: string, query?: boolean, extras?: any) {
    this.loading = true;
    const url = this.url + parameter ?? '';
    const attr = (query ? '?' : '/') + extras ?? '';
    console.log(url + attr);

    return this.http.get<Countries>(url + attr).subscribe({
      next: res => {
        this.countries = res;
        this.loading = false;
      }, error: err => {
        console.log(err);
        this.loading = false;
        this.countries = [];

      },
    })
  }
  searchCountry(val: string) {
    if (val.length > 0) {
      this.fetchCountries('name', false, val)
    } else this.ngOnInit();
  }


}
