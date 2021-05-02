import * as React from 'react'
import { IBuyer } from '../../../types'
import { CartContext } from '../../contexts'

/* Router */
/* import { Link } from 'react-router-dom'
import { Routes } from '../../constants' */

/* Components */
import { Wrapper } from '../atoms'
import { WithSidebar } from '../templates'

function Information() {
  // refs
  const formRef = React.useRef<HTMLFormElement>(null)

  const { addBuyer, ...rest } = React.useContext(CartContext.Context)
  console.log('🚀 ~ file: Information.tsx ~ line 18 ~ Information ~ rest', rest)

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
                <button type="button" className="button">
                  Back
                </button>

                {/* <Link to={Routes.CHECKOUT_PAYMENT}> */}
                <button type="submit" className="button primary">
                  pay
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
          <div>
            <p>Order: </p>
          </div>
        </WithSidebar>
      </Wrapper>
    </section>
  )
}

export default Information
