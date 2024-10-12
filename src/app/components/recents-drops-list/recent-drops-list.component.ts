import {Component} from '@angular/core';
import {DropItem} from "../drop-item/interfaces/drop-item.interface";

@Component({
  selector: 'app-recent-drops-list',
  templateUrl: './recent-drops-list.component.html',
  styleUrl: './recent-drops-list.component.scss'
})
export class RecentDropsListComponent {
  dropItems: DropItem[] = [
    {
      title: 'Enigma Chest',
      subtitle: 'Mystery Marvels',
      image: '../../../assets/img/boxes/box-1.svg',
      username: 'kevin_gather8391',
      avatar: '../../../assets/img/avatars/avatar-1.svg'
    },
    {
      title: 'Treasure Trove',
      subtitle: 'Eerie Enigmas',
      image: '../../../assets/img/boxes/box-2.svg',
      username: 'kevin_gather8391',
      avatar: '../../../assets/img/avatars/avatar-2.svg'
    },
    {
      title: 'Crypto Crate',
      subtitle: 'Eerie Enigmas',
      image: '../../../assets/img/boxes/box-3.svg',
      username: 'kevin_gather8391',
      avatar: '../../../assets/img/avatars/avatar-3.svg'
    },
    {
      title: 'Concealed Curiosities',
      subtitle: 'Mystery Marvels',
      image: '../../../assets/img/boxes/box-4.svg',
      username: 'kevin_gather8391',
      avatar: '../../../assets/img/avatars/avatar-1.svg'
    },
    {
      title: 'Mystic Vault',
      subtitle: 'Esoteric Earnings',
      image: '../../../assets/img/boxes/box-5.svg',
      username: 'kevin_gather8391',
      avatar: '../../../assets/img/avatars/avatar-2.svg'
    },
    {
      title: 'Conundrum Cache',
      subtitle: 'Esoteric Earnings',
      image: '../../../assets/img/boxes/box-6.svg',
      username: 'kevin_gather8391',
      avatar: '../../../assets/img/avatars/avatar-3.svg'
    }
  ];

}
