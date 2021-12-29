import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from 'src/app/recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-contributor-content',
  templateUrl: './contributor-content.component.html',
  styleUrls: ['./contributor-content.component.css'],
})
export class ContributorContentComponent implements OnInit {
  
  @ViewChild('contribution', { static: false }) contributionForm: NgForm;

  itemNumber: number
  recipe: Recipe;
  recipename:string
  author:string
  description:string
  image:string
  integridents:[]
  procedure:[]
  onUpdate:boolean = false
  login:boolean = false
  subscription: Subscription;

  constructor(private recipeService: RecipesService, private route: ActivatedRoute , private router:Router) {
  }

  ngOnInit(): void {
    this.login =  this.recipeService.userLoggedIn
    if(!this.login){
      this.router.navigate(['/login']);
    }
    this.route.params.subscribe((param: Params) => {
      this.recipe = this.recipeService.getRecipe(param.name);
      if (this.recipe) {
        this.onUpdate = true
      }
    });
  }

  onAddRecipe(): void {
    this.itemNumber = this.recipeService.itemNumber
    this.recipename = this.contributionForm.value.recipename
    this.author = this.contributionForm.value.author
    this.description = this.contributionForm.value.description
    this.image = this.contributionForm.value.image
    this.integridents = this.contributionForm.value.integridents
    this.procedure = this.contributionForm.value.procedure
    const newRecipe = new Recipe(this.itemNumber, this.recipename, this.author, this.description, this.image, 
      this.integridents, this.procedure);
    if (!this.onUpdate) {
     this.recipeService.addRecipe(newRecipe);
    }
    else {
      this.recipeService.updateRecipe(newRecipe);
    }
  }

  onReset():void {
    this.contributionForm.reset();
  }

  loadContents(): void {
    this.contributionForm.form.patchValue({
      itemNumber: this.itemNumber,
      recipename: this.recipe.name,
      author: this.recipe.author,
      description: this.recipe.description,
      image: this.recipe.image,
      integridents:this.recipe.ingredients,
      procedure: this.recipe.procedure
    });
  }
}
