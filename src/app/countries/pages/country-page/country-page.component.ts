import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';

import { switchMap, tap } from 'rxjs';

import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?:Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.countriesService.searchCountryByAlphaCode( id) ),
      tap(response => console.log(response)
      )
    )
    .subscribe( country =>{
      if(!country){
        return this.router.navigateByUrl('by-capital')
      }
       return this.country = country;

    })
  }


}
