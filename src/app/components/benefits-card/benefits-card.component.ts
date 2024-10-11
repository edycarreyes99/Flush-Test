import {Component, Input} from '@angular/core';
import {BenefitCard} from "./interfaces/benefit-card.interface";

@Component({
  selector: 'app-benefits-card',
  templateUrl: './benefits-card.component.html',
  styleUrl: './benefits-card.component.scss'
})
export class BenefitsCardComponent {
  // Input Variables
  @Input() benefitCard: BenefitCard | undefined;

}
