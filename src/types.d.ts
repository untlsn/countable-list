declare module React {
  interface HTMLAttributes<T> {
    class?: string;
  }
}

import 'mobx';
declare module 'mobx' {
  import { IObservableValue } from 'mobx';
  interface IIValueDidChange<T = any> {
    type: 'update';
    observableKind: 'value';
    object: IObservableValue<T>;
    debugObjectName: string;
    newValue: T;
    oldValue: T;
  }

  export function observe<T, K extends keyof T>(
    object: T,
    property: K,
    listener: (change: IIValueDidChange<T[K]>) => void,
    fireImmediately?: boolean | undefined
  ): Function
}

declare global {
  interface ObjectConstructor {
    entries<T extends string|number|symbol, R>(obj: Record<T, R>): [key: T, val: R][]
  }
  interface Map<T, R> {
    changeKey(oldName: T, newName: T): this
    edit(key: T, update: (val: R) => R): this
  }
}

declare module '.css';
