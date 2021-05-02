import * as React from 'react'

/* Context */
import { Context } from './'

/* Types */
import { IProduct, WithChildren } from '../../../types'

/* Initial State */
import initialState from '../../initialState'

function Provider({ children }: WithChildren) {
  const [state, setState] = React.useState(initialState)

  const addToCart = (product: IProduct) => {
    setState({
      ...state,
      cart: [...state.cart, product]
    })
  }

  const removeFromCart = (productId: string) => {
    setState({
      ...state,
      cart: state.cart.filter((product: IProduct) => product.id !== productId)
    })
  }

  const value = {
    cart: state.cart,
    products: state.products,
    addToCart,
    removeFromCart
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
