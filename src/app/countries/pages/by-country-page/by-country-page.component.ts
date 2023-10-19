import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { tap } from 'rxjs';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

public countries:Country[] = [];
public initialValue:string= '';
constructor( private countriesService:CountriesService ){}

ngOnInit(): void {
  this.countries = this.countriesService.cacheStore.byCountries.countries;
  this.initialValue = this.countriesService.cacheStore.byCountries.term;
}
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
