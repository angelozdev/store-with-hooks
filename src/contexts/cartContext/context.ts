import * as React from 'react'
import { IProduct } from '../../../types'

interface CartContext {
  cart: IProduct[]
  products: IProduct[]
  removeFromCart?: (productId: string) => void
  addToCart?: (product: IProduct) => void
}

const CartContext = React.createContext<CartContext>({
  cart: [],
  products: []
})

export default CartContext
