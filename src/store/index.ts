import { makeAutoObservable } from 'mobx';
import Settings from '~/store/parts/settings';
import Catalogs from '~/store/parts/catalogs';
import runEffects from '~/store/effects';
import Points from '~/store/parts/points';

const store = makeAutoObservable({
  settings: new Settings(),
  catalogs: new Catalogs(),
  points: new Points(),
});

runEffects(store);

export default store;
