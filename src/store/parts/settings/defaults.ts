import { makeAutoObservable } from 'mobx';
export default class Defaults {
  catalog = 'default';
  color = '#ffffff';

  constructor() {
    makeAutoObservable(this);
  }

  set(values: { catalog: string, color: string }) {
    Object.entries(values).forEach(([key, val]) => {
      this[key] = val;
    });
  }
}
