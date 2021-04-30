import * as React from 'react'

/* Components */
import { Wrapper } from '../atoms'
import { Products } from '../molecules'

/* Initial State */
import initialState from '../../initialState'

function Home() {
  return (
    <section className="home__container">
      <Wrapper>
        <div className="home__content">
          <Products products={initialState.products} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Home
