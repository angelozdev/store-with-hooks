import * as React from 'react'
import Router from './router'

/* Styles */
import 'normalize.css'
import './styles/global.css'

function App(): JSX.Element {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Router />
    </React.Suspense>
  )
}

export default App
