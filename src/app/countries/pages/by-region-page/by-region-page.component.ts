import { Component } from '@angular/core';
import { tap } from 'rxjs';

import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) { }

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    return this.countriesService.searchByRegion(region).pipe(
      tap(countries => {
        this.countries = countries;
      })
    )
      .subscribe();
  }

}
