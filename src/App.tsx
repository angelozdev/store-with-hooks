import * as React from 'react'
import Routes from './Routes'

/* Styles */
import 'normalize.css'
import './styles/global.css'

function App(): JSX.Element {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Routes />
    </React.Suspense>
  )
}

export default App
