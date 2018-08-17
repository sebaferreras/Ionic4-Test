// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { ItemsService, Item } from '../services/items.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {

  items: Array<Item>;

  constructor(public router: Router, 
              public navCtrl: NavController,
              public itemsService: ItemsService) {}

  ngOnInit() {
    this.items = this.itemsService.items;
  }

  public onOpenDetails(item: Item) {
    // this.router.navigate(['/item-details', item.id]);
    this.navCtrl.goForward(`/item-details/${item.id}`);
  }

}
