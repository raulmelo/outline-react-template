import React from 'react';
import { routeItem } from './routes.types'

/*
* @desc Fluxo são páginas geradas pelo PLOP.js  
*/
const RoutesFluxos = [
  {
    path: 'admin',
    routerPrivate: false,
    component: React.lazy( () => import('pages/Admin'))
  },
  {
    path: '',
    routerPrivate: false,
    component: React.lazy( () => import('pages/Home'))
  }
] as routeItem[]

export default RoutesFluxos