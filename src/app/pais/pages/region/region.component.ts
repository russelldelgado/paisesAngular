import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
    button{
      margin-right:5px
    }
    `
  ]
})


export class RegionComponent   {
  regiones :string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva : string = '';
  paises :Country[] = [];

  constructor(
    private paisService : PaisService,

  ) { }


  getClaseCSS( region :string) : string{
    return ( region ===  this.regionActiva ) 
                  ? 'btn btn-primary mr-5' 
                  : 'btn btn-outline-primary' ;
  }

  activarRegion(region : string){

    if(this.regionActiva == region) return ;

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region).subscribe(paises =>{
      this.paises = paises;
    });
    //TODO -- HACER EL LLAMADO  A LA REGION
  }
}
