import {Component, Input} from '@angular/core';
import {BoxItem} from "./interfaces/box-item.interface";

@Component({
  selector: 'app-box-item',
  templateUrl: './box-item.component.html',
  styleUrl: './box-item.component.scss'
})
export class BoxItemComponent {
  // Input Variables
  @Input() box: BoxItem | undefined;

}
