import { createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, resetear } from './contador.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(resetear, (state) => 0)
);