import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.eu/rest/v2';


  get httpParamns(){
    return new HttpParams().set('fields' , 'name;capital;alpha2Code;flag;population');
  }


  constructor(private http : HttpClient) { }

  buscarPais(termino:string): Observable<Country[]>{
    const url : string = `${this.apiUrl}/name/${termino}`
   return  this.http.get<Country[]>(url, {params: this.httpParamns});
  }

  buscarCapital(termino:string): Observable<Country[]>{
    const url : string = `${this.apiUrl}/capital/${termino}`
   return  this.http.get<Country[]>(url , {params: this.httpParamns});
  }

  getPaisPorAlpha(id:string): Observable<Country>{
    const url : string = `${this.apiUrl}/alpha/${id}`
   return  this.http.get<Country>(url);
  }


  buscarRegion(region : string ) :  Observable<Country[]> {
     const url : string = `${this.apiUrl}/region/${region}`
     return this.http.get<Country[]>(url , {params: this.httpParamns});
  }

  //https://restcountries.eu/rest/v2/capital/madrid

}
