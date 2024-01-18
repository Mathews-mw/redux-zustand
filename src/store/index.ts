import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
	reducer: {},
});

export type RootState = ReturnType<typeof store.getState>; // ReturnType do Typescriot retorna um tipo de retorno de uma função. Nesse caso, vai retornar o tipo do retorno da função getState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
