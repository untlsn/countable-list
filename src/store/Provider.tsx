import store from '~/store';
import { StoreContext } from '~/store/hooks';



const StoreProvider = (props: { children: any }) => {
  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
