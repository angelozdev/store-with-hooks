import * as React from 'react'
import Router from './router'

/* Contexts */
import { CartContext } from './contexts'

/* Styles */
import 'normalize.css'
import './styles/global.css'

function App(): JSX.Element {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <CartContext.Provider>
        <Router />
      </CartContext.Provider>
    </React.Suspense>
  )
}

export default App
