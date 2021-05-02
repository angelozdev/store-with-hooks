import * as React from 'react'

/* Router */
import { Link } from 'react-router-dom'
import { Routes } from '../../constants'

/* Contexts */
import { CartContext } from '../../contexts'

/* Components */
import { Icons, Wrapper } from '../atoms'
import { WithSidebar } from '../templates'

function Checkout() {
  /* context */
  const { cart, removeFromCart, totalPrice } = React.useContext(
    CartContext.Context
  )

  return (
    <section className="checkout__container">
      <Wrapper>
        <WithSidebar>
          <div className="checkout__main_content">
            <div className="checkout__header">
              <h1 className="checkout__title">Product list:</h1>
            </div>

            {cart.length ? (
              <ul className="checkout__products">
                {cart.map((product) => (
                  <li key={product.id} className="checkout__product">
                    <p>{product.title}</p>
                    <div className="checkout__actions">
                      <p>
                        $<span>{product.price}</span>
                      </p>
                      <button
                        className="button small danger"
                        onClick={() => removeFromCart?.(product.id)}
                      >
                        <Icons.Trash width="1rem" height="1rem" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>You do not have any product in the cart.</p>
            )}
          </div>

          {Boolean(cart.length) && (
            <div className="checkout__sidebar">
              <p>
                Total Price{' '}
                <strong>
                  $<span>{totalPrice}</span>
                </strong>
              </p>

              <Link to={Routes.CHECKOUT_INFO}>
                <button className="button medium primary">Go to order</button>
              </Link>
            </div>
          )}
        </WithSidebar>
      </Wrapper>
    </section>
  )
}

export default Checkout
