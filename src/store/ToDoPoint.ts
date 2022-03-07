import uuid from '~/helpers/uuid';
import clamp from '~/helpers/clamp';
import { makeAutoObservable } from 'mobx';

export interface ToDoPointRoot {
  id?: string,
  maxCount?: number,
  curCount?: number,
  color?: string,
  catalog?: string

  name: string,
}

class ToDoPoint {
  id: string;
  color: string;
  catalog: string;
  maxCount: number;
  curCount: number;
  name: string;

  constructor(root: ToDoPointRoot) {
    this.id = root.id || uuid();
    this.color = root.color || '#fff';
    this.catalog = root.catalog || 'default';
    this.maxCount = root.maxCount || 1;
    this.curCount = root.curCount || 0;
    this.name = root.name;

    makeAutoObservable(this);
  }

  get isMulti() {
    return this.maxCount > 1;
  }
  get isFilled() {
    return this.curCount == this.maxCount;
  }

  setFill(fill = this.curCount != this.maxCount) {
    this.curCount = fill ? this.maxCount : 0;
  }

  changeCount(addNum: number) {
    this.curCount = clamp(this.curCount + addNum, 0, this.maxCount);
  }
}

export default ToDoPoint;
