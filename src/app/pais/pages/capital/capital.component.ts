import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent implements OnInit {


  termino : string  = '';
  hayError : boolean = false;
  paises : Country[] = [];


  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino : string){
    this.hayError=false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe(
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
