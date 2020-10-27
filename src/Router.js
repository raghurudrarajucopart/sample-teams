// import { hot } from 'react-hot-loader'
import * as React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, withRouter, BrowserRouter } from 'react-router-dom'
// import { AppFrame } from '@copart/ops-tool-kit'
import Home from '../src/views/Home'
import store from './store'

//const Frame = withRouter(AppFrame)

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <BrowserRouter basename={'teams'}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/teams" component={Home} />
        </Switch>
      </BrowserRouter>
    </BrowserRouter>
  </Provider>
)

export default Router
