import * as React from 'react'

/* Router */
import { Link } from 'react-router-dom'
import { Routes } from '../../constants'

/* Contexts */
import { CartContext } from '../../contexts'

/* Components */
import { Icons, Wrapper } from '../atoms'

function Header() {
  const { cart } = React.useContext(CartContext.Context)
  return (
    <header className="header__container">
      <Wrapper>
        <nav className="header__content">
          <h1>
            <Link to={Routes.HOME}>PlatziConf Merch</Link>
          </h1>

          <Link to={Routes.CHECKOUT} className="header__cart_container">
            <Icons.Cart width="1.5rem" height="1.5rem" strokeWidth="1px" />
            {Boolean(cart.length) && <span>{cart.length}</span>}
          </Link>
        </nav>
      </Wrapper>
    </header>
  )
}

export default Header
