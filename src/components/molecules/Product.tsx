import * as React from 'react'

/* Types */
import { IProduct } from '../../../types'

function Product({ title, description, image, price }: IProduct) {
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

        <button className="button primary">BUY</button>
      </div>
    </li>
  )
}

export default Product
