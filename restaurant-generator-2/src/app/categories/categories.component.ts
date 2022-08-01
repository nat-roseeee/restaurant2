import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CATEGORIES } from '../initial-categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = CATEGORIES;
  
  selectedCategory?: Category;
  restaurants?: string[];
  onSelect(category: Category): void {
    this.selectedCategory = category;
    this.restaurants = category.listContents;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
