import { Component } from '@angular/core';
import { tap } from 'rxjs';

import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries:Country[] = [];

  constructor(private  countriesService : CountriesService ){}

  searchByRegion( term: string){
   
   return this.countriesService.searchByRegion( term ).pipe(
    tap( countries =>{
      this.countries = countries;
    })
   )
   .subscribe();
  }

}
