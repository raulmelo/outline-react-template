// Adicionando o fluxo em suas rotas
// 
// Adicione o seu novo fluxo de páginas na sua lista de rotas list-routes.tsx
// 
// {
//   path: '',
//   routerPrivate: false,
//   component: React.lazy( () => import('pages/Home'))
// }
// Remover linhas acimas
// 

import React from 'react'
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';

const Home = ({ match }: RouteComponentProps) => {
  const { url } = match
  return (
    <div id="Home">
      <h1>Home, {url} </h1>
      <Router>
        <Switch >
            <Route path={url + 'page-2'} component={ () => <h1>Page router example page 2</h1> } />
            <Route path={url} component={ () => <h1>Page initial</h1> } />
        </Switch>
      </Router>
    </div>
  )
}

export default Home
