import {configureStore, createSlice} from "@reduxjs/toolkit";

let user = createSlice({
    name: 'user', // state 이름
    initialState: {name: 'Lee', age: 20}, // state 기본 값
    reducers: {
        changeName(state) {
            state.name = 'park' // Lee 받아온 값
        },
    }
})

let stock = createSlice({
    name: 'stock',
    initialState: [7,8,9]
})

let cart = createSlice({
    name: 'cart',
    initialState: [
        {
            id : 1,
            title : "울 개버딘 소재의 재킷",
            content : "재킷. 더블 브레스트, 버튼 6개, 피크 라펠, 대담한 숄더 디자인.",
            count: 2,
            price : 5575000,
        },

        {
            id : 2,
            title : "비시 울 소재의 오버사이즈 재킷",
            content : "재킷. 더블 브레스트, 버튼 6개, 재생 울 소재, 피크 라펠, 과장된 숄더 디자인.",
            count: 1,
            price : 5145000,
        }
    ]
})

export default configureStore({
    reducer:{
        user: user.reducer,
        cart: cart.reducer,
        stock: stock.reducer
    }
})

export let {changeName} = user.actions