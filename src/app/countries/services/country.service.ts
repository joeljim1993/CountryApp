import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap, map,delay } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1"
  public countries: Country[] = [];

  public cacheStore ={
    byCapital: {term:'',countries:[] },
    byCountries: {term:'',countries:[] },
    byRegion: {term:'',countries:[] }

  }

  constructor(private http: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]> {

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([])),

      );
  }


  searchCountryByAlphaCode(code: string): Observable<Country | null> {

    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(error => of(null))
      );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url);
  }

  searchByCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    console.log("url", url);

    return this.getCountriesRequest(url);
  }

  searchByRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;

    return this.getCountriesRequest(url);


  }



}
