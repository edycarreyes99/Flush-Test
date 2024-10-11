import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReferFriendsComponent } from './components/refer-friends/refer-friends.component';
import {NgOptimizedImage} from "@angular/common";
import { BenefitsCardComponent } from './components/benefits-card/benefits-card.component';
import { BoxesListComponent } from './components/boxes-list/boxes-list.component';
import { BoxCategoriesFilterComponent } from './components/box-categories-filter/box-categories-filter.component';
import { SearchComponent } from './components/search/search.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReferFriendsComponent,
    BenefitsCardComponent,
    BoxesListComponent,
    BoxCategoriesFilterComponent,
    SearchComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
