import { configureStore, createSlice } from "@reduxjs/toolkit";

// entity처럼 사용하는 거 같다.

let user = createSlice({
  name: 'user',  // state 이름
  initialState: {
    name: 'kim',
    age: 20
  }  // statue 값
})

let cart = createSlice({
  name: 'cart',  
  initialState: [
    {id : 0, title : 'White and Black', count : 2},
    {id : 2, title : 'Grey Yordan', count : 1}
  ],
  reducers: {
    addCart(state, item) {
      state.push(item.payload);
    },
    addCount(state, id) {
      // reduce에서는 array, object 수정이 용이함
      state[id.payload].count++;
    },
    subConut(state, id) {
      if ( state[id.payload].count > 0 ) {
        state[id.payload].count--
      }
    }
  }
})

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer  // 작명: 만든 거.reducer
  }
});

export let { addCount, subConut, addCart } = cart.actions;