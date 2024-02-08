import { createAction, props } from '@ngrx/store';

// padre
export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');

// hijo
export const multiplicar = createAction(
    '[Contador] Multiplicar',
    props<{numero: number}>()
);
export const dividir = createAction(
    '[Contador] Dividir',
    props<{numero: number}>()
);

// nieto
export const resetear = createAction('[Contador] Resetear');
