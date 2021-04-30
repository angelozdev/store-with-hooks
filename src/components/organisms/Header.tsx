import * as React from 'react'

/* Router */
import { Link } from 'react-router-dom'
import { Routes } from '../../constants'

/* Components */
import { Wrapper } from '../atoms'

function Header() {
  return (
    <header className="header__container">
      <Wrapper>
        <nav className="header__content">
          <h1>
            <Link to={Routes.HOME}>PlatziConf Merch</Link>
          </h1>

          <span>
            <Link to={Routes.CHECKOUT}>Checkout</Link>
          </span>
        </nav>
      </Wrapper>
    </header>
  )
}

export default Header
