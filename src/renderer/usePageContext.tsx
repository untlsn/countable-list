// `usePageContext` allows us to access `pageContext` in any React component.
// More infos: https://vite-plugin-ssr.com/pageContext-anywhere

import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import type { PageContext } from './types';

export { PageContextProvider };
export { usePageContext };

const Context = createContext<PageContext>(undefined as any);

function PageContextProvider({ pageContext, children }: { pageContext: PageContext; children: any }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

const usePageContext = () => useContext(Context);
