import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css'],
})
export class UpdateRecipeComponent implements OnInit {
  login: boolean = false;
  recipe: Recipe;
  updateForm: FormGroup;
  recipeIntgridents = new FormArray([]);
  recipeprocedure = new FormArray([]);

  itemNumber: number;
  recipename: string;
  author: string;
  description: string;
  image: string;
  integridents: [];
  procedure: [];
  isFetching: boolean = true;
  id: string;
  error: string;

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.login) {
      this.router.navigate(['/login']);
    }

    this.route.params.subscribe((param: Params) => {
      this.recipeService.getRecipe(param.id).subscribe(
        (recipe: Recipe) => {
          this.id = param.id;
          this.isFetching = false;
          this.recipe = recipe;
          this.loadContents();
        },
        (error) => {
          this.isFetching = false;
          this.error = error.message;
          console.log(error);
        }
      );
    });
  }

  onReset() {
    this.router.navigate(['../../recipe/' + this.id], {
      relativeTo: this.route,
    });
  }

  loadContents(): void {
    if (this.recipeIntgridents.length != 0) {
      for (let intgrident of this.recipe.ingredients) {
        this.recipeIntgridents.push(new FormControl(intgrident));
      }
    }

    if (this.recipeprocedure.length != 0) {
      for (let procedure of this.recipe.procedure) {
        this.recipeprocedure.push(new FormControl(procedure));
      }
    }

    this.updateForm = new FormGroup({
      recipename: new FormControl(this.recipe.name, [Validators.required]),
      author: new FormControl(this.recipe.author, [Validators.required]),
      description: new FormControl(this.recipe.description, [
        Validators.required,
      ]),
      image: new FormControl(this.recipe.image, [Validators.required]),
      integridents: this.recipeIntgridents,
      procedure: this.recipeprocedure,
    });
  }

  getIntgeridentsControls() {
    return (<FormArray>this.updateForm.get('integridents')).controls;
  }

  onAddIntgerident() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.updateForm.get('integridents')).push(control);
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.updateForm.get('integridents')).removeAt(index);
  }

  getProcedureControls() {
    return (<FormArray>this.updateForm.get('procedure')).controls;
  }

  onAddProcedure() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.updateForm.get('procedure')).push(control);
  }

  onDeleteProcedure(index: number) {
    (<FormArray>this.updateForm.get('procedure')).removeAt(index);
  }

  onUpdateRecipe() {
    this.recipename = this.updateForm.value.recipename;
    this.author = this.updateForm.value.author;
    this.description = this.updateForm.value.description;
    this.image = this.updateForm.value.image;
    this.integridents = this.updateForm.value.integridents;
    this.procedure = this.updateForm.value.procedure;
    const newRecipe = new Recipe(
      this.recipename,
      this.author,
      this.description,
      this.image,
      this.integridents,
      this.procedure
    );

    this.recipeService.updateRecipe(newRecipe, this.id);
  }
}
