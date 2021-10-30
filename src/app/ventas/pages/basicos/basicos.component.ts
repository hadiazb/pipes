import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  public nombreLower: string = 'hugo'
  public nombreUpper: string = 'HUGO'
  public nombreCompleto: string = 'huGo'


  public fecha: Date = new Date()

  constructor() { }


}
