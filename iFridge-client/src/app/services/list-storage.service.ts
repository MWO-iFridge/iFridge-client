import { Injectable } from '@angular/core';
const storageName = 'ingredient_list';

const defaultList = [
  { title: 'Jajko' },
  { title: 'Jabłko' }
];

@Injectable()
export class ListStorageService {
private list;

  constructor() {
    this.list = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }

  // get items
  get() {
    return [...this.list];
  }

  // add a new item
  post(item) {
    this.list.push(item);
    return this.update();
  }

  // update an item
  put(item, changes) {
    Object.assign(this.list[this.findItemIndex(item)], changes);
    return this.update();
  }

  // remove an item
  destroy(item) {
    this.list.splice(this.findItemIndex(item), 1);
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.list));

    return this.get();
  }

  private findItemIndex(item) {
    return this.list.indexOf(item);
  }
}
