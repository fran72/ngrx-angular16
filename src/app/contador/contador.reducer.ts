import { createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, resetear, multiplicar, dividir } from './contador.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(resetear, (state) => initialState),
);