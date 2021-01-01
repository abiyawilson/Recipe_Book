import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnChanges, OnInit {
  @Input() recipe : Recipe;
  recipes: Recipe;
  constructor() { }
  ngOnInit(): void {
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes))
  }
}
