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

  const addToCart = React.useCallback(
    (product: IProduct) => {
      setState((prevState) => ({
        ...prevState,
        cart: [...state.cart, product]
      }))
    },
    [state.cart]
  )

  const removeFromCart = React.useCallback(
    (productId: string) => {
      setState((prevState) => ({
        ...prevState,
        cart: state.cart.filter((product: IProduct) => product.id !== productId)
      }))
    },
    [state.cart]
  )

  const addBuyer = React.useCallback(
    (buyer: IBuyer) => {
      setState((prevState) => ({
        ...prevState,
        buyer
      }))
    },
    [state.buyer]
  )

  const totalPrice = React.useMemo(() => {
    return state.cart.reduce((acc, cur) => {
      return cur.price + acc
    }, 0)
  }, [state.cart])

  const value = {
    cart: state.cart,
    products: state.products,
    buyer: state.buyer,
    totalPrice,
    addToCart,
    removeFromCart,
    addBuyer
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
