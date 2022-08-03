import { Component, OnInit } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { CATEGORIES } from '../initial-categories';
import { Category } from '../category'

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {

  categories = CATEGORIES;

  public selectedCategory = 'pick a category';
  public selectedList: string[] = [];
  public randomRestaurant = "";
  public oldRestaurant = "";

  public getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  
  public onSelected(selectedValue:string): void {
    for (let i=0; i<this.categories.length; i++) {
      if(this.categories[i].listTitle == selectedValue)
        this.selectedList = this.categories[i].listContents;
    }
    if (selectedValue == 'pick a category') {
      this.randomRestaurant = "";
      this.selectedList = [];
    }
  }

  public generateRand(selectedList:string[]): void {
    if (this.selectedList.length > 0) {
      this.randomRestaurant = this.selectedList[Math.floor(Math.random() * this.selectedList.length)];
      if(this.randomRestaurant == this.oldRestaurant){
        this.generateRand(selectedList);
      }
      this.oldRestaurant = this.randomRestaurant;
    }
  }

}
