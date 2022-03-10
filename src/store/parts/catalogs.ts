Map.prototype.changeKey = function (oldKey, newKey) {
  this.set(newKey, this.get(oldKey));
  this.delete(oldKey);
  return this;
};
Map.prototype.edit = function (name, update) {
  this.set(name, update(this.get(name)));
  return this;
};

export default class Catalogs {
  all = new Map<string, string[]>([['default', []]]);
  open = 'default';


  get keys() {
    return [...this.all.keys()];
  }

  orderOf(name: string) {
    return this.all.get(name);
  }

  isOpen(catalog: string) {
    return catalog == this.open;
  }

  changeName(oldName: string, newName: string) {
    this.all.changeKey(oldName, newName);
    if (this.open == oldName) {
      this.open = newName;
    }
  }

  push(name: string, id: string) {
    if (this.all.has(name)) {
      this.all.edit(name, old => [...old, id]);
    } else {
      this.all.set(name, [id]);
    }
  }
};
