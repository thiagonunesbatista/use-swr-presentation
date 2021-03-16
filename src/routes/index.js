import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from 'components/Navbar'
import PageWrapper from 'components/PageWrapper'

import ListUsersSWR from 'pages/ListUsersSWR'
import ListUsersUseEffect from 'pages/ListUsersUseEffect'
import User from 'pages/User'

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <PageWrapper>
      <Switch>
        <Route exact path='/' component={ListUsersSWR} />
        <Route
          exact
          path='/list-users-use-effect'
          component={ListUsersUseEffect}
        />
        <Route exact path='/user/:login' component={User} />
      </Switch>
    </PageWrapper>
  </BrowserRouter>
)

export default Router
