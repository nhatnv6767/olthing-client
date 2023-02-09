import { createSlice } from '@reduxjs/toolkit'
import { notifySuccess, notifyError } from '@utils/toast'

const initialState = {
  cart_products: [],
  orderQuantity: 1,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_cart_product: (state, { payload }) => {
      const isExist = state.cart_products.some((i) => i._id === payload._id)
      if (!isExist) {
        const newItem = {
          ...payload,
          orderQuantity: 1,
        }
        state.cart_products.push(newItem)
        notifySuccess(`${payload.title} đã được thêm vào giỏ hàng!`)
      }
    },
  },
})

