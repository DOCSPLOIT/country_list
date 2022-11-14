import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countries, Country } from '../country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  private url = "https://restcountries.com/v3.1/name/"

  country?: Country
  constructor(private router: ActivatedRoute, private http: HttpClient) {
    this.router.params.subscribe(res => {
      this.getCountry(res['name'])
    })

  }
  nativeName = () => this.country?.name.nativeName![Object.keys(this.country?.name.nativeName ?? {})[0]].common ?? 'Unknown'
  currencies() {
    const cur: any = this.country?.currencies;
    const m = [];
    if (cur) {
      for (let c in cur) {
        m.push(cur[c].name)
      }
    }
    return m.toString();
  }
  languages = () => Object.values(this.country?.languages ?? {}).toString().replace(',', ', ')
  ngOnInit(): void {
  }
  getCountry(attr: string) {
    this.http.get<Countries>(this.url + attr + '?fullText=true').subscribe({
      next: res => {

        this.country = res[0];
      }, error: err => {
        console.log(err);
        this.country = undefined

      },
    })
  }
}
