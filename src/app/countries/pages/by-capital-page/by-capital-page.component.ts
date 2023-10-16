import { Component, Injectable } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { tap } from 'rxjs';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] =[];

  constructor( private countriesService: CountriesService ){}

  searchByCapital(term:string):void {
   const result = this.countriesService.searchCapital(term).pipe(
    tap(countries =>{
      this.countries = countries;}),
    tap(response => console.log("respuesta",response)
    )
   )
   result.subscribe();



  }

}
