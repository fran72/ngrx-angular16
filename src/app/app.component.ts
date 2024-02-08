import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { AppState } from './models/contador.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  contador: number;
  
  constructor( private store: Store<AppState> ) {
    
    this.store.select('contador').subscribe( contador => this.contador = contador );
    // this.store.subscribe( state => this.contador = state.contador );
    
  }
  
  incrementar(){
    this.store.dispatch( actions.incrementar() );
  }

  decrementar(){
    this.store.dispatch( actions.decrementar() );
  }

  reset(event: number){
    this.store.dispatch( actions.resetear() );
  }

}
