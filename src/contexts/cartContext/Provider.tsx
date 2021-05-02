import * as React from 'react'

/* Context */
import { Context } from './'

/* Types */
import { IBuyer, IProduct, WithChildren } from '../../../types'

/* Initial State */
import initialState from '../../initialState'

function Provider({ children }: WithChildren) {
  const [state, setState] = React.useState({
    ...initialState,
    buyer: {}
  })

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

  const addBuyer = (buyer: IBuyer) => {
    setState({
      ...state,
      buyer
    })
  }

  const value = {
    cart: state.cart,
    products: state.products,
    buyer: state.buyer,
    addToCart,
    removeFromCart,
    addBuyer
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
