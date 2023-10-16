import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder:string ='lo que sea'

  @Output()
public onValue= new EventEmitter<string>();

emitValue(value:string):void{
  this.onValue.emit( value )
  console.log("value desde el serach box",value);

}

}
