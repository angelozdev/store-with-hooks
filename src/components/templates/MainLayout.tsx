import * as React from 'react'

/* Types */
import { WithChildren } from '../../../types'

/* Components */
import { Header } from '../orgamisms'

function MainLayout({ children }: WithChildren) {
  return (
    <React.Fragment>
      <Header />

      <main className="main">{children}</main>
    </React.Fragment>
  )
}

export default MainLayout
