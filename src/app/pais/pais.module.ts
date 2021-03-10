import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CapitalComponent, PaisComponent, RegionComponent, VerPaisComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
   
  ],
  exports:[
    CapitalComponent ,
    PaisComponent,
    RegionComponent,
    VerPaisComponent,
  ]
})
export class PaisModule { }
