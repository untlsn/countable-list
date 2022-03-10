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
    (newVal, oldVal) => {
      if (newVal > oldVal) {
        store.catalogs.push(
          store.points.get(oldVal).catalog,
          oldVal,
        );
      }
    },
  );
};

export default runEffects;


