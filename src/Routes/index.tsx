import React , { Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import  RoutesFluxos from './list-routes'
import { LoadingPage, Page404} from 'Shared/fallback-components/fallback-components'

const history = createBrowserHistory();

const PreLoadLazyComponents = () => {
  const list = RoutesFluxos
  return (
    <Router history={history}>
      <Suspense fallback={ <LoadingPage /> }>
        <Switch>
          {list.map( (router: any, index: number) => <Route key={index} path={'/' + router.path} component={router.component} />)}
          <Route path="*" component={Page404} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default React.memo(PreLoadLazyComponents);