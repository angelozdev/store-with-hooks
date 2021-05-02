import * as React from 'react'

/* Components */
import { Product } from '../molecules'

/* Context */
import { CartContext } from '../../contexts'

function Products() {
  const { products } = React.useContext(CartContext.Context)
  return (
    <ul>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default Products
