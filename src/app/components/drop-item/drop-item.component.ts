import {Component, Input} from '@angular/core';
import {DropItem} from "./interfaces/drop-item.interface";

@Component({
  selector: 'app-drop-item',
  templateUrl: './drop-item.component.html',
  styleUrl: './drop-item.component.scss'
})
export class DropItemComponent {
  // Input Components
  @Input() dropItem: DropItem | undefined;

}
