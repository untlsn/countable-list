import { reaction } from 'mobx';
import { Store } from '~/store/hooks';

const runEffects = (store: Store) => {
  reaction(
    () => store.settings.defaults.catalog,
    (newVal, oldVal) => {
      store.catalogs.changeName(oldVal, newVal);
    },
  );
  reaction(
    () => store.points.length,
    (__, id) => {
      console.log(store.points.all[id].catalog, '->', id);
      store.catalogs.push(
        store.points.all[id].catalog,
        String(id),
      );
    },
  );
};

export default runEffects;


