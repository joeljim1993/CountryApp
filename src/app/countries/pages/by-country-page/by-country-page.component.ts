import { Component } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { tap } from 'rxjs';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

public countries:Country[] = [];
constructor( private countriesService:CountriesService ){}

  searchByCountry(term:string):void{ 
    console.log("term",term);
    
    this.countriesService.searchByCountry( term )
    .pipe(
      tap((countries: Country[]) =>{
        this.countries = countries
      })
      
    )
    .subscribe();
  }
}
