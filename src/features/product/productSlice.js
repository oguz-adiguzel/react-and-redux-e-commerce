import { createSlice } from "@reduxjs/toolkit"
import productItems from "../../product"

const initialState = {
    productItems: productItems,
    basket: [],
    amount: 0,
    total: 0,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            let addProduct = state.productItems.find((item) => item.id === action.payload)
            state.basket.push(addProduct)
        },
        removeBasket: (state) => {
            state.basket = []
        },
        totalCalculater: (state, action) => {
            let total = 0
            state.basket.forEach((item) => {
                total += item.price
            })
            state.total = total
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.basket = state.basket.filter((item) => (item.id !== itemId))
        },
        amountCalculater: (state) => {
            let numberOfProducts = state.basket.length
            state.amount = numberOfProducts
        }
    }
})

export default productSlice.reducer
export const { addBasket, removeBasket, totalCalculater, removeItem, amountCalculater } = productSlice.actions