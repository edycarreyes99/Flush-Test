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
    },
    {
      title: 'Treasure Trove',
      description: 'Eerie Enigmas',
      image: '../../../assets/img/boxes/box-2.svg',
      price: 120.00,
      isNew: true
    },
    {
      title: 'Crypto Crate',
      description: 'Eerie Enigmas',
      image: '../../../assets/img/boxes/box-3.svg',
      price: 88.99,
      isNew: false
    },
    {
      title: 'Concealed Curiosities',
      description: 'Mystery Marvels',
      image: '../../../assets/img/boxes/box-4.svg',
      price: 99.99,
      isNew: false
    },
    {
      title: 'Mystic Vault',
      description: 'Esoteric Earnings',
      image: '../../../assets/img/boxes/box-5.svg',
      price: 87.56,
      isNew: false
    },
    {
      title: 'Conundrum Cache',
      description: 'Esoteric Earnings',
      image: '../../../assets/img/boxes/box-6.svg',
      price: 42.99,
      isNew: false
    }
  ];
}
