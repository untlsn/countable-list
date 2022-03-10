import SinglePoint from '~/store/parts/points/singlePoint';
import { makeAutoObservable } from 'mobx';


export default class Points {
  all = new Map<string, SinglePoint>();
  length = 0;

  constructor() {
    makeAutoObservable(this);
  }

  add(props: { name: string, maxCount: number, color: string, catalog: string }) {
    const id = String(this.length++);
    const point = new SinglePoint(
      id,
      props.name,
      props.maxCount,
      props.color,
      props.catalog,
    );
    this.all.set(id, point);
  }

  get(id) {
    return this.all.get(String(id));
  };

  remove(id) {
    this.length--;
    this.all.delete(String(id));
  }
};
