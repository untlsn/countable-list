import { makeAutoObservable } from 'mobx';
import Defaults from '~/store/parts/settings/defaults';

export default class Settings {
  readonly defaults = new Defaults();
  trashOpen = false;

  constructor() {
    makeAutoObservable(this);
  }
}
