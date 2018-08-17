// Angular
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { ItemsService, Item } from '../services/items.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage {

  public item: Item;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) { }

  ionViewWillEnter() {
    const itemId = +this.route.snapshot.paramMap.get('id');
    this.item = this.itemsService.getItem(itemId);
  }

}
