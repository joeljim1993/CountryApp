import { Component, Injectable, OnInit } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { tap } from 'rxjs';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] =[];
  public isLoading:boolean=false;
  public initialValue:string = '';

  constructor( private countriesService: CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term 
  }
  searchByCapital(term:string):void {
    this.isLoading = true;
   const result = this.countriesService.searchCapital(term).pipe(
    tap(countries =>{
      this.countries = countries;
      this.isLoading = false;
    }),

   )
   result.subscribe();



  }

}
