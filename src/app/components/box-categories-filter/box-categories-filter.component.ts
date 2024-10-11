import { Component } from '@angular/core';
import {BoxCategory} from "./interfaces/box-category.interface";

@Component({
  selector: 'app-box-categories-filter',
  templateUrl: './box-categories-filter.component.html',
  styleUrl: './box-categories-filter.component.scss'
})
export class BoxCategoriesFilterComponent {
  // Component Variables
  boxCategories: BoxCategory[] = [
    {
      title: 'All',
    },
    {
      title: 'New',
    },
    {
      title: 'Featured',
    },
    {
      title: 'Gaming',
    },
    {
      title: 'Electronics',
    },
    {
      title: 'Jewelery',
    },
    {
      title: 'Other',
    }
  ];
}
