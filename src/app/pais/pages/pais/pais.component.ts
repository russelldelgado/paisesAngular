import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
  ]
})
export class PaisComponent {

  termino : string  = '';
  hayError : boolean = false;
  paises : Country[] = [];

  constructor(private paisService : PaisService) { }


  buscar(){
    this.hayError=false;
    console.log(this.termino)
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises)
        this.paises = paises;
      },(err) =>{
       this.hayError  =true;
       this.paises = [];
      }
    );
  }

}
