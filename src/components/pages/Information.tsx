import * as React from 'react'
import { Wrapper } from '../atoms'
import { WithSidebar } from '../templates'

function Information() {
  return (
    <section className="information__container">
      <Wrapper>
        <WithSidebar>
          <div>
            <h1>Contact information:</h1>
            <form>
              <input
                className="input"
                placeholder="Fullname"
                type="text"
                pattern="[a-zA-Z]{4,10}"
                required
              />
              <input
                className="input"
                placeholder="Email"
                type="email"
                required
              />
              <input
                className="input"
                placeholder="Address"
                type="text"
                required
              />
              <input
                className="input"
                placeholder="Apto"
                type="text"
                required
              />
              <input
                className="input"
                placeholder="City"
                type="text"
                required
              />
              <input
                className="input"
                placeholder="Country"
                type="text"
                required
              />
              <input
                className="input"
                placeholder="State"
                type="text"
                required
              />
              <input
                className="input"
                placeholder="Zip code"
                type="text"
                pattern="[0-9]{4,10}"
                required
              />
              <input
                className="input"
                placeholder="Phone"
                type="text"
                pattern="[0-9]{5,10}"
                required
              />

              <div className="information__buttons">
                <button type="button" className="button">
                  Back
                </button>
                <button type="submit" className="button primary">
                  pay
                </button>
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
