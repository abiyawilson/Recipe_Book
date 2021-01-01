import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from 'src/app/recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-contributor-content',
  templateUrl: './contributor-content.component.html',
  styleUrls: ['./contributor-content.component.css']
})
export class ContributorContentComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('descInput', { static: false }) descInputRef: ElementRef;
  @ViewChild('imageInput', { static: false }) imageInputRef: ElementRef;
  // @Output() recipeAdded = new EventEmitter<string>();

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const cName = this.nameInputRef.nativeElement.value;
    const cDesc = this.descInputRef.nativeElement.value;
    const cimg = this.imageInputRef.nativeElement.value;
    const newRecipe = new Recipe(cName,cDesc,cimg)
    this.recipeService.recipes.push(newRecipe)
    this.recipeService.recipeAdded.emit("Added");
  }
}
