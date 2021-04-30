import * as React from 'react'

/* Components */
import { Wrapper } from '../atoms'
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
                  <button className="button small danger">remove</button>
                </div>
              </li>
            </ul>
          </div>

          <div className="checkout__sidebar">
            <p>
              Total Price <strong>$1.100</strong>
            </p>

            <button className="button medium primary">Go to order</button>
          </div>
        </WithSidebar>
      </Wrapper>
    </section>
  )
}

export default Checkout
