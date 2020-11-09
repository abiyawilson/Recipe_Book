import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public selectedRecipe:string;
  public selectedStatus:boolean =false;

  recipes :Recipe[]=[
    new Recipe ("Dosa","A Kerala food that makes yoy tounge watery by its taste","https://media.istockphoto.com/photos/masala-dosa-with-variety-of-chutney-and-sambar-picture-id136503190?k=6&m=136503190&s=612x612&w=0&h=6rfluSgf6RWPUy6vWZuzsesZDyS0Y2GBzQ4_VM-nPUI="),
    new Recipe ("Halwa", "A sweet taht will melt in you moputh", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3rFGL5II14m8_aEZiyc_RrwYqTXil-ITd7g&usqp=CAU")
  ]
  constructor() { }

  ngOnInit(): void {
  }

  show(name:string){
    this.selectedStatus = true;
    this.selectedRecipe = name;
  }

}
