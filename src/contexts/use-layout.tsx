import React, { createContext, FunctionComponent, useContext, useEffect, useState } from 'react';
import { LayoutProps, OnLoginProps } from './use-layout.props';


const layoutContext = createContext({} as any);



function useProvideLayout(): any {
  const [fullLoading, setFullLoading] = useState<boolean>(false);
  const [waitChildren, setWaitChildren] = useState<boolean>(true);
  useEffect(() => {
    initialAuth();
  }, []);

  async function initialAuth() {
    /*
    * @desc Validação de usuario de token 
    * para localizar padrões do projeto
    */
    setWaitChildren(false);
  }

  return {
    waitChildren,
    setFullLoading,
    fullLoading
  };
}

export const ProvideLayout: FunctionComponent = ({ children }) => {
  const layout: LayoutProps = useProvideLayout();
  if (layout.waitChildren) {
    return null;
  }
  return <layoutContext.Provider value={layout}>{children}</layoutContext.Provider>;
};
