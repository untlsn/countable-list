import { makeAutoObservable } from 'mobx';
import clamp from '~/helpers/clamp';
import store from '~/store';

export default class SinglePoint {
  curCount = 0;

  constructor(
    public id: string,
    public name: string,
    public maxCount: number,
    public color: string,
    public catalog: string,
  ) {
    makeAutoObservable(this);
  }

  get filled() {
    return this.maxCount == this.curCount;
  }

  get multi() {
    return this.maxCount > 1;
  }

  set count(value: number) {
    console.log(value);
    this.curCount = clamp(value, 0, this.maxCount);
  }

  fill() {
    this.curCount = this.filled ? 0 : this.maxCount;
  }

  remove() {
    store.catalogs.removeId(this.id);
    store.points.remove(this.id);
  }
};
