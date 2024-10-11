import {Component} from '@angular/core';
import {BoxItem} from "../box-item/interfaces/box-item.interface";

@Component({
  selector: 'app-boxes-list',
  templateUrl: './boxes-list.component.html',
  styleUrl: './boxes-list.component.scss'
})
export class BoxesListComponent {
  // Component Variables
  boxes: BoxItem[] = [
    {
      title: 'Enigma Chest',
      description: 'Mystery Marvels',
      image: '../../../assets/img/boxes/box-1.svg',
      price: 59.99,
      isNew: true
    }
  ];
}
