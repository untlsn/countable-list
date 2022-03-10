import { makeAutoObservable } from 'mobx';

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
};
