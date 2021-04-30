import * as React from 'react'

/* Types */
import { IProduct } from '../../../types'

function Product({ title, description, image, price }: IProduct) {
  return (
    <li className="product_item">
      <figure className="product_item__image_container">
        <img
          className="product_item__image"
          src={image}
          alt={`product: ${title}`}
        />
      </figure>

      <div className="product_item__details">
        <h2 className="product_item__title">
          {title} <span>{price}</span>
        </h2>

        <p className="product_item__description">{description}</p>

        <button className="product_item__button">Buy</button>
      </div>
    </li>
  )
}

export default Product
