import * as React from 'react'

/* Router */
import { Link } from 'react-router-dom'
import { Routes } from '../../constants'

/* Components */
import { Icons, Wrapper } from '../atoms'
import { WithSidebar } from '../templates'

function Checkout() {
  return (
    <section className="checkout__container">
      <Wrapper>
        <WithSidebar>
          <div className="checkout__main_content">
            <div className="checkout__header">
              <h1 className="checkout__title">Product list:</h1>
            </div>

            <ul className="checkout__products">
              <li className="checkout__product">
                <p>Item name</p>
                <div className="checkout__actions">
                  <p>$10</p>
                  <button className="button small danger">
                    <Icons.Trash width="1rem" height="1rem" />
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div className="checkout__sidebar">
            <p>
              Total Price <strong>$1.100</strong>
            </p>

            <Link to={Routes.CHECKOUT_INFO}>
              <button className="button medium primary">Go to order</button>
            </Link>
          </div>
        </WithSidebar>
      </Wrapper>
    </section>
  )
}

export default Checkout
