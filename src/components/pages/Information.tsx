import * as React from 'react'

/* Types */
import { IBuyer } from '../../../types'

/* Context */
import { CartContext } from '../../contexts'

/* Router */
import { useHistory } from 'react-router'
import { Routes } from '../../constants'

/* Components */
import { Wrapper } from '../atoms'
import { WithSidebar } from '../templates'

function Information() {
  // refs
  const formRef = React.useRef<HTMLFormElement>(null)

  // context
  const { addBuyer, cart } = React.useContext(CartContext.Context)

  // history
  const history = useHistory()

  // helper methods
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      zip_code: formData.get('zip_code'),
      phone: formData.get('phone')
    }

    addBuyer?.(buyer as IBuyer)

    history.push(Routes.CHECKOUT_PAYMENT)
  }

  return (
    <section className="information__container">
      <Wrapper>
        <WithSidebar>
          <div>
            <h1>Contact information:</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                name="name"
                className="input"
                placeholder="Fullname"
                type="text"
                pattern="[a-zA-Z]{4,10}"
                /* required */
              />
              <input
                name="email"
                className="input"
                placeholder="Email"
                type="email"
                /* required */
              />
              <input
                name="address"
                className="input"
                placeholder="Address"
                type="text"
                /* required */
              />
              <input
                name="apto"
                className="input"
                placeholder="Apto"
                type="text"
                /* required */
              />
              <input
                name="city"
                className="input"
                placeholder="City"
                type="text"
                /* required */
              />
              <input
                name="country"
                className="input"
                placeholder="Country"
                type="text"
                /* required */
              />
              <input
                name="state"
                className="input"
                placeholder="State"
                type="text"
                /* required */
              />
              <input
                name="zip_code"
                className="input"
                placeholder="Zip code"
                type="text"
                pattern="[0-9]{4,10}"
                /* required */
              />
              <input
                name="phone"
                className="input"
                placeholder="Phone"
                type="text"
                pattern="[0-9]{5,10}"
                /* required */
              />

              <div className="information__buttons">
                <button
                  type="button"
                  className="button"
                  onClick={() => history.goBack()}
                >
                  Back
                </button>

                <button type="submit" className="button primary">
                  pay
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2>Order: </h2>
            <ul className="checkout__products">
              {cart.map((product) => (
                <li className="checkout__product" key={product.id}>
                  <p>{product.title}</p>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </WithSidebar>
      </Wrapper>
    </section>
  )
}

export default Information
