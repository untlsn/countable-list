export interface ToDoPoint {
  id: string,
  name: string,
  maxCount: number,
  curCount: number,
  color: string,
  catalog: string
}

export interface ToDoPointReq extends Partial<ToDoPoint> {
  name: string,
}
