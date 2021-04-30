import * as React from 'react'

/* Components */
import { Product } from '../molecules'

/* Types */
import { IProduct } from '../../../types'

/* Local types */
interface Props {
  products: IProduct[]
}

function Products({ products = [] }: Props) {
  return (
    <ul>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </ul>
  )
}

export default Products
