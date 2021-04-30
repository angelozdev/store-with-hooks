import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* Constants */
import { Routes } from '../constants'

/* Pages */
import { Pages } from '../components'

/* Components */
import { MainLayout } from '../components/templates'

function RoutesComponent() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path={Routes.HOME} component={Pages.Home} />
          <Route exact path={Routes.CHECKOUT} component={Pages.Checkout} />
          <Route
            exact
            path={Routes.CHECKOUT_INFO}
            component={Pages.Information}
          />
          <Route
            exact
            path={Routes.CHECKOUT_PAYMENT}
            component={Pages.Payment}
          />
          <Route
            exact
            path={Routes.CHECKOUT_SUCCESS}
            component={Pages.Success}
          />
          <Route component={Pages.NotFound} />
        </Switch>
      </MainLayout>
    </Router>
  )
}

export default RoutesComponent
