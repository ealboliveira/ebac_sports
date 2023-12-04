import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
