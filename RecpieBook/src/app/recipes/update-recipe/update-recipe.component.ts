import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {

  login:boolean = false
  recipe: Recipe;
  contributionForm : FormGroup;
  recipeIntgridents = new FormArray([])
  recipeprocedure = new FormArray([])
  
  itemNumber: number
  recipename:string
  author:string
  description:string
  image:string
  integridents:[]
  procedure:[]

  constructor(private recipeService: RecipesService, private route: ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.login =  this.recipeService.userLoggedIn
    if(!this.login){
      this.router.navigate(['/login']);
    }

    this.route.params.subscribe((param: Params) => {
      this.recipe = this.recipeService.getRecipe(param.id);
      if (this.recipe) {
        this.loadContents()
      }
    });
  }

  onReset(){
    this.router.navigate(['../../recipe/' + this.recipe.id], { relativeTo: this.route });
  }

  loadContents(): void {
    for (let intgrident of this.recipe.ingredients){
      this.recipeIntgridents.push(new FormControl(intgrident))
    }

    for ( let procedure of this.recipe.procedure) {
      this.recipeprocedure.push(new FormControl(procedure))
    }
    
    this.contributionForm = new FormGroup ({
      'recipename': new FormControl(this.recipe.name, [Validators.required]),
      'author': new FormControl(this.recipe.author, [Validators.required]),
      'description': new FormControl(this.recipe.description, [Validators.required]),
      'image': new FormControl(this.recipe.image, [Validators.required]),
      'integridents': this.recipeIntgridents,
      'procedure':  this.recipeprocedure

    })
    
  }

  getIntgeridentsControls() {
    return (<FormArray>this.contributionForm.get('integridents')).controls;
  }

  onAddIntgerident() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.contributionForm.get('integridents')).push(control);
  }

  onDeleteIngredient(index:number){
    (<FormArray>this.contributionForm.get('integridents')).removeAt(index);
  }

  getProcedureControls() {
    return (<FormArray>this.contributionForm.get('procedure')).controls;
  }

  onAddProcedure() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.contributionForm.get('procedure')).push(control);
  }

  onDeleteProcedure(index:number) {
    (<FormArray>this.contributionForm.get('procedure')).removeAt(index);
  }

  onUpdateRecipe() {
    this.itemNumber = this.recipe.id
    this.recipename = this.contributionForm.value.recipename
    this.author = this.contributionForm.value.author
    this.description = this.contributionForm.value.description
    this.image = this.contributionForm.value.image
    this.integridents = this.contributionForm.value.integridents
    this.procedure = this.contributionForm.value.procedure
    const newRecipe = new Recipe(this.itemNumber, this.recipename, this.author, this.description, this.image, 
      this.integridents, this.procedure);
    
    this.recipeService.updateRecipe(newRecipe);
    
  }

  
}

