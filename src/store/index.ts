import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { player } from './slices/player';

export const store = configureStore({
	reducer: {
		player,
	},
});

export type RootState = ReturnType<typeof store.getState>; // ReturnType do Typescriot retorna um tipo de retorno de uma função. Nesse caso, vai retornar o tipo do retorno da função getState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
