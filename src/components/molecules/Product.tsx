import * as React from 'react'

/* Types */
import { IProduct } from '../../../types'

/* Contexts */
import { CartContext } from '../../contexts'

/* Local types */
interface Props {
  product: IProduct
}

function Product({ product }: Props) {
  const { title, description, image, price } = product
  const { addToCart } = React.useContext(CartContext.Context)

  return (
    <li className="product_item">
      <figure className="product_item__image_container">
        <img
          loading="lazy"
          className="product_item__image"
          src={image}
          alt={`${title} product`}
        />
      </figure>

      <div className="product_item__details">
        <h2 className="product_item__title">{title}</h2>

        <p className="product_item__price">
          Price: $<span>{price}</span>
        </p>

        <p className="product_item__description">{description}</p>

        <div className="product_item__buttons">
          <button
            className="button primary"
            onClick={() => addToCart?.(product)}
          >
            BUY
          </button>
        </div>
      </div>
    </li>
  )
}

export default Product
