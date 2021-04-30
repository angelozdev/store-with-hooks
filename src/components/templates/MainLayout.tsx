import * as React from 'react'

/* Router */
import { Link } from 'react-router-dom'
import { Routes } from '../../constants'

/* Local types */
interface Props {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Link to={Routes.HOME}>Home</Link>
          <Link to={Routes.CHECKOUT}>CHECKOUT</Link>
          <Link to={Routes.CHECKOUT_PAYMENT}>CHECKOUT_PAYMENT</Link>
          <Link to={Routes.CHECKOUT_SUCCESS}>CHECKOUT_SUCCESS</Link>
        </nav>
      </header>

      <main>{children}</main>
    </React.Fragment>
  )
}

export default MainLayout
