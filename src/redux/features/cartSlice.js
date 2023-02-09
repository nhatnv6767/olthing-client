import { createSlice } from '@reduxjs/toolkit'
import { notifySuccess, notifyError } from '@utils/toast'
import { setLocalStorage } from '@utils/localstorage'

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
      } else {
        state.cart_products.map((item) => {
          if (item._id === payload._id) {
            if (item.quantity >= item.orderQuantity + state.orderQuantity) {
              item.orderQuantity =
                state.orderQuantity !== 1
                  ? state.orderQuantity + item.orderQuantity
                  : item.orderQuantity + 1
              notifySuccess(
                `${state.orderQuantity} ${item.title} đã thêm vào giỏ`)
            } else {
              notifyError('Mặt hàng này đã hết!')
              state.orderQuantity = 1
            }
          }
          return { ...item }
        })
      }
      setLocalStorage('cart_products', state.cart_products)
    },
  },
})

