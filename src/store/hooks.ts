import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import store from '~/store/index';


export type Store = typeof store;
export const StoreContext = createContext<Store>(store);
export const useStore = () => useContext(StoreContext);
