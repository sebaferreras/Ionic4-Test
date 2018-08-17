import { Injectable } from '@angular/core';

export class Item {
  public id: number;
  public title: string;
  public note: string;
  public icon: string;
};

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public items: Array<Item> = [];

  constructor() {
    const icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane', 'american-football', 'boat', 'bluetooth', 'build'];

    for (let i = 1; i < 101; i++) {
      this.items.push({
        id: i,
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: icons[Math.floor(Math.random() * icons.length)]
      });
    }
  }

  public getItem(itemId: number): Item {
    return this.items.find(item => item.id === itemId);
  }
}
