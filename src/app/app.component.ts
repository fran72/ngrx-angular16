import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  contador: number;
  
  constructor( private store: Store<AppState> ) {
    
    this.contador = 10;
    
  }
  
  incrementar(){
    this.contador ++;
  }

  decrementar(){
    this.contador -= 1;
  }

  showNew(event: number){
    console.log('event......', event);
    this.contador = event;
  }



}
