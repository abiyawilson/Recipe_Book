import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from 'src/app/recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-contributor-content',
  templateUrl: './contributor-content.component.html',
  styleUrls: ['./contributor-content.component.css'],
})
export class ContributorContentComponent implements OnInit {
  recipe: Recipe;
  recipename: string;
  author: string;
  description: string;
  image: string;
  integridents: [];
  procedure: [];

  contributionForm: FormGroup;

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.contributionForm = new FormGroup({
      recipename: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      integridents: new FormArray([]),
      procedure: new FormArray([]),
    });
  }

  onAddRecipe(): void {
    this.recipename = this.contributionForm.value.recipename;
    this.author = this.contributionForm.value.author;
    this.description = this.contributionForm.value.description;
    this.image = this.contributionForm.value.image;
    this.integridents = this.contributionForm.value.integridents;
    this.procedure = this.contributionForm.value.procedure;
    const newRecipe = new Recipe(
      this.recipename,
      this.author,
      this.description,
      this.image,
      this.integridents,
      this.procedure
    );

    this.recipeService.addRecipe(newRecipe);
  }

  onReset(): void {
    this.contributionForm.reset();
  }

  getIntgeridentsControls() {
    return (<FormArray>this.contributionForm.get('integridents')).controls;
  }

  onAddIntgerident() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.contributionForm.get('integridents')).push(control);
  }

  getProcedureControls() {
    return (<FormArray>this.contributionForm.get('procedure')).controls;
  }

  onAddProcedure() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.contributionForm.get('procedure')).push(control);
  }
}
