import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError ,of, tap} from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl:string ="https://restcountries.com/v3.1"

    public countries:Country[] =[];
  constructor(private http: HttpClient) { }

  searchCapital(term:string):Observable<Country[]>{
      const url = `${this.apiUrl}/capital/${term}`;
      return this.http.get<Country[]>( url )
      .pipe(
        catchError(error => of([]))
      );
  }
  searchByCountry(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    console.log("url",url);
    
    return this.http.get<Country[]>( url)
    .pipe(
      tap(response => console.log("rsponse by pais",response)),
      catchError(error => of([]))
    );
  }

  searchByRegion(term:string):Observable<Country[]> {
    const url=  `${this.apiUrl}/region/${term}`;

    return this.http.get<Country[]>( url)
    .pipe(
      tap(response => console.log("rsponse by region",response)),
      catchError(error => of([]))
    );

  }



}
