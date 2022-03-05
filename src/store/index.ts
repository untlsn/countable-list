import { autorun, makeAutoObservable } from 'mobx';
import { ToDoPoint } from '~/store/types';

class Store {
  points: Record<string, ToDoPoint> = {};

  constructor() {
    makeAutoObservable(this);
  }

  get pointsArr() {
    return Object.values(this.points);
  }

  set newPoint(value: ToDoPoint) {
    this.points[value.id] = value;
  }

  setPoints(points: Record<string, ToDoPoint>) {
    this.points = points;
  }
}

const store = new Store();
export default store;

autorun(() => {
  if (typeof process != 'object') localStorage.setItem('points', JSON.stringify(store.points));
});


