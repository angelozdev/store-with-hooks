import * as React from 'react'
import { IBuyer, IProduct } from '../../../types'

interface CartContext {
  cart: IProduct[]
  products: IProduct[]
  buyer: Partial<IBuyer>
  totalPrice: number
  removeFromCart?: (productId: string) => void
  addToCart?: (product: IProduct) => void
  addBuyer?: (buyer: IBuyer) => void
}

const CartContext = React.createContext<CartContext>({
  cart: [],
  products: [],
  buyer: {},
  totalPrice: 0
})

export default CartContext
