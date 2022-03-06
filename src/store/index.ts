import { autorun, makeAutoObservable, configure } from 'mobx';
import { ToDoPoint } from '~/store/types';

class Store {
  points: Record<string, ToDoPoint> = {};
  pointsOrder = [] as string[];
  trashInUse = false;

  constructor() {
    makeAutoObservable(this);
  }

  set newPoint(value: ToDoPoint) {
    value.color ||= '#fff';
    this.points[value.id] = value;
    this.pointsOrder.push(value.id);
  }

  setPoints(points: Record<string, ToDoPoint>) {
    this.points = points;
    this.pointsOrder = Object.keys(points);
  }

  removePoint(id: string) {
    delete this.points[id];
    this.pointsOrder.splice(this.pointsOrder.indexOf(id), 1);
  }
}

const store = new Store();
export default store;

configure({
  enforceActions: 'never',
});

autorun(() => {
  if (typeof process != 'object') localStorage.setItem('points', JSON.stringify(store.points));
});


