import {Component} from '@angular/core';
import {BenefitCard} from "../benefits-card/interfaces/benefit-card.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  benefitsCards: BenefitCard[] = [
    {
      title: '15%',
      subtitle: 'From Pure Profit',
      description: '15% from platform\'s house edge will be paid your Referrals winning bet.',
      image: '../../../assets/img/benefits/benefit-gift-box.svg'
    },
    {
      title: '2.5%',
      subtitle: 'From all Winnings',
      description: '2,5% from all winnings will be paid to your Referrals winning bet.',
      image: '../../../assets/img/benefits/benefit-trophy.svg'
    },
    {
      title: '1,5%',
      subtitle: 'From deposit',
      description: '1,5% from depositing on our platform will be paid back in your account.',
      image: '../../../assets/img/benefits/benefit-medal.svg'
    },
  ];

}
