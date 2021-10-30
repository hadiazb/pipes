import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  public nombre: string = 'Susana';
  public genero: string = 'femenino';

  public clientes: string[] = ['Maria', 'Arturo', 'Camilo', 'Luis'];

  public invitacionObj = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  public clientesMpa = {
    '=0': 'Actualmente no tenemos cliente esperando',
    '=1': 'Actualmente  tenemos un cliente esperando',
    '=2': 'Actualmente tenemos 2 clientes esperando',
    'other': 'Actualmente tenemos # clientes esperando',
  }

}
