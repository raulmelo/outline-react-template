import { ComponentClass,FunctionComponent } from "react";

export interface routeItem {
  path: string,
  component: ComponentClass<any> | FunctionComponent<any>,
  routerPrivate?: boolean
}
