import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories = [
      {id: 1, listTitle:"Dinkytown restaurants", listContents: ["Banh Appetit", "JJ's Poke", "Wally's", "Frank & Andrea's Pizza", "Shuang Cheng", "Pho Mai", "Burrito Loco", "D.P Dough"]},
      {id: 2, listTitle:"Stadium Village restaurants", listContents: ["Bona", "Afro Deli", "Stubs and Herbs", "My Burger"]},
      {id: 3, listTitle:"Pizza restaurants", listContents: ["Davani's", "Punch Pizza", "Pizza Luce", "Blaze Pizza", "Domino's", "Red Rabbit", "D.P.Dough"]},
      {id: 4, listTitle:"Chains", listContents: ["Panera Bread","Jimmy John's", "Qdoba", "Chipotle", "Pancheros", "Noodles and Company", "Raising Cane's", "Jersey Mike's", "Domino's", "Potbelly", "Five Guys"]},
      {id: 5, listTitle:"Coffee and Tea", listContents: ["Mu Mu Tea", "Kung Fu Tea", "Starbucks", "Gray's", "Bordertown", "Surdyks", "Dogwood", "Caribou Coffee", "Dunkin Donuts"]},
      {id: 6, listTitle:"Breakfast Restaurants", listContents: ["Black Coffee and Waffle Bar", "Bruegger's Bagels", "Birchwood", "Wise Acre"]},
      {id: 7, listTitle:"Charley's Favorite Restaurants", listContents: ["Heights Pizza Man", "Pizza Man", "Columbia Heights Pizza Man", "Pizza Man Columbia Heights"]}
  ]
    return {categories};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  generateId(categories: Category[]): number {
    return categories.length > 0 ? Math.max(...categories.map(category => category.id)) + 1 : 1;
  }
}