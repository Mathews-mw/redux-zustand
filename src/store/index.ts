import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Estudar React', 'Estudar Redux'],

  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo)
    }
  }
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  }
})

export const { add } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>; // ReturnType do Typescriot retorna um tipo de retorno de uma função. Nesse caso, vai retornar o tipo do retorno da função getState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;