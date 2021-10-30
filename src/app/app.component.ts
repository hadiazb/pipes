import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombre: string = 'hugo andres diaz bernal';
  public flag: boolean = false;


  mostrarNombre() {
    this.flag = !this.flag
  }
}
