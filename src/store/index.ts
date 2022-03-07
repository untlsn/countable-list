import { autorun, makeAutoObservable, configure } from 'mobx';
import { ToDoPoint, ToDoPointReq } from '~/store/types';
import uuid from '~/helpers/uuid';

const createSavePoint = (partialPoint: ToDoPointReq): ToDoPoint => ({
  id: uuid(),
  color: '#fff',
  catalog: 'default',
  maxCount: 1,
  curCount: 0,
  ...partialPoint,
});

class Store {
  points: Record<string, ToDoPoint> = {};
  pointsOrder = [] as string[];
  trashInUse = false;

  constructor() {
    makeAutoObservable(this);
  }

  set newPoint(value: ToDoPointReq) {
    const point = createSavePoint(value);
    this.points[point.id] = point;
    this.pointsOrder.push(point.id);
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


