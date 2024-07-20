import {configureStore, createSlice} from "@reduxjs/toolkit";
import cart from './utils/CartSlice';
import { loadState, saveState, clearState } from "./utils/LocalStorage";

let user = createSlice({
    name: 'user',
    initialState: { name: 'Lee', age: 20 },
    reducers: {
      changeName(state) {
        state.name = 'park';
      },
      logout(state) {
        // 로그아웃 시 상태 초기화
        clearState();
        return { name: '', age: 0 };
      },
    },
  });

/* let stock = createSlice({
    name: 'stock',
    initialState: [7,8,9]
}) */

const persistedState = loadState();

const store =  configureStore({
    reducer:{
        cart: cart.reducer
    },
    preloadedState: {
        cart: persistedState,
    }
});

store.subscribe(() => {
    saveState(store.getState().cart);
  });
  
  export default store;

// export let {changeName} = user.actions