import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime, tap } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit,OnDestroy{


  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;
  
  @Input()
  public placeholder: string = 'lo que sea'

  @Input()
  public initialValue:string ='';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();


  ngOnInit(): void {


    this.debouncerSuscription =this.debouncer
      .pipe(
        debounceTime(500),
        tap(value => this.onDebounce.emit(value)
        )
      )
      .subscribe();

  }
  // destruye esta instancia del componente
  ngOnDestroy(): void {
    console.log("destruido");
    this.debouncerSuscription?.unsubscribe();

  }

  emitValue(value: string): void {
    this.onValue.emit(value)
    console.log("value desde el serach box", value);

  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

}
