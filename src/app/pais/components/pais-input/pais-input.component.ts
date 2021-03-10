import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/Operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  implements OnInit{

  @Output() onEnter : EventEmitter<string> = new EventEmitter; // este evento se va a emitir cuando la persona pulsa enter
  @Output() onDebounce : EventEmitter<string> = new EventEmitter; //este evento se va a emitir cuando la persona deja de escribir

  debouncer : Subject<string>= new Subject;

  termino : string ='';
  constructor() { }
  


  ngOnInit(): void {
    //podemos utilizar el pipe porque estamos trabajando con observables
    this.debouncer
      .pipe(
        //este pipe es como una tuberia que me permite a mi transformar la salida de el suscribe de abajo.
        //un operador bien interesante es el debouncetime que debemos de importar de rxjs
        debounceTime(500)//este nos sirve para parar el timepo durante 500 milisegundos

      )
      .subscribe(valor =>{
        this.onDebounce.emit( valor )
      })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
   this.debouncer.next(this.termino);//utilizo el next para llamar otra vez al siguinete valor que se emita en this.termino
  }

}
