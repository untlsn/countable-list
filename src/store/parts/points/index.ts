import SinglePoint from '~/store/parts/points/singlePoint';
import { makeAutoObservable } from 'mobx';


export default class Points {
  all: Record<string, SinglePoint> = {};
  length = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addPoint(props: { name: string, maxCount: number, color: string, catalog: string }) {
    const id = String(this.length++);
    this.all[id] = new SinglePoint(id, props.name, props.maxCount, props.color, props.catalog);
  }
};
