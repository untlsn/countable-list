Map.prototype.changeKey = function (oldKey, newKey, careful = false) {
  if (careful && this.has(newKey)) {
    const fromNew = this.get(newKey);
    this.set(newKey, this.get(oldKey));
    this.set(oldKey, fromNew);
    return this;
  }
  this.set(newKey, this.get(oldKey));
  this.delete(oldKey);
  return this;
};
Map.prototype.edit = function (name, update) {
  this.set(name, update(this.get(name)));
  return this;
};

export default class Catalogs {
  all = new Map([['default', new Set<string>()]]);
  open = 'default';


  get keys() {
    return [...this.all.keys()];
  }

  get currentOrder() {
    return this.orderOf(this.open);
  }
  set currentOrder(ids: string[]) {
    this.setOrder(this.open, ids);
  }

  orderOf(name: string) {
    return [...this.all.get(name)];
  }

  setOrder(name: string, ids: string[]) {
    this.all.set(name, new Set(ids));
  }

  isOpen(catalog: string) {
    return catalog == this.open;
  }

  changeName(oldName: string, newName: string) {
    this.all.changeKey(oldName, newName, true);
    if (this.open == oldName) {
      this.open = newName;
    }
  }

  push(name: string, id) {
    id = String(id);
    if (this.all.has(name)) {
      this.all.get(name).add(id);
    } else {
      this.all.set(name, new Set([id]));
    }
  }

  removeId(id: any, name?: string) {
    id = String(id);
    if (name) {
      this.all.get(name).delete(id);
    } else {
      this.all.forEach(set => {
        set.delete(id);
      });
    }

  }
};
