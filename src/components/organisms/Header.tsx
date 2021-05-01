import * as React from 'react'

/* Router */
import { Link } from 'react-router-dom'
import { Routes } from '../../constants'

/* Components */
import { Icons, Wrapper } from '../atoms'

function Header() {
  return (
    <header className="header__container">
      <Wrapper>
        <nav className="header__content">
          <h1>
            <Link to={Routes.HOME}>PlatziConf Merch</Link>
          </h1>

          <Link to={Routes.CHECKOUT}>
            <Icons.Cart width="1.5rem" height="1.5rem" strokeWidth="1px" />
          </Link>
        </nav>
      </Wrapper>
    </header>
  )
}

export default Header
