import { autorun, makeAutoObservable, configure } from 'mobx';
import ToDoPoint, { ToDoPointRoot } from '~/store/ToDoPoint';

class Store {
  points: Record<string, ToDoPoint> = {};
  pointsOrders = { default: [] } as Record<string, string[]>;
  trashInUse = false;
  #catalogs = new Set<string>(['default']);
  openCatalog = 'default';

  constructor() {
    makeAutoObservable(this);
  }

  get catalogs() {
    return [...this.#catalogs];
  }

  get currentOrder() {
    return this.pointsOrders[this.openCatalog];
  }
  set currentOrder(order) {
    this.pointsOrders[this.openCatalog] = order;
  }

  set newPoint(value: ToDoPointRoot) {
    const point = new ToDoPoint(value);
    this.#catalogs.add(point.catalog);
    this.points[point.id] = point;
    this.pointsOrders[point.catalog] ||= [];
    this.pointsOrders[point.catalog].push(point.id);
  }

  removePoint(id: string) {
    const order = this.pointsOrders[this.points[id].catalog];
    order.splice(order.indexOf(id), 1);
    delete this.points[id];
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


