import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
  ]
})
export class PaisComponent {

  termino : string  = 'honduras'

  constructor() { }


  buscar(){
    console.log(this.termino)
    this.termino = '';
  }

}
