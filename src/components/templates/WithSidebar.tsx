import * as React from 'react'

/* Types */
import { WithChildren } from '../../../types'

function WithSidebar({ children }: WithChildren) {
  return <div className="with_sidebar__layout">{children}</div>
}

export default WithSidebar
