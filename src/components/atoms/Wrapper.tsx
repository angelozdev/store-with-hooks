import * as React from 'react'

/* Types */
import { WithChildren } from '../../../types'

function Wrapper({ children }: WithChildren) {
  return <div className="wrapper">{children}</div>
}

export default Wrapper
