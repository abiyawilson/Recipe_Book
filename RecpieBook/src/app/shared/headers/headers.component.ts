import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesService } from 'src/app/recipes.service';


@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  constructor(private recipeService: RecipesService) { }

  login: boolean;

  ngOnInit(): void {
    this.recipeService.login.subscribe(
      (loggedIn: boolean) => this.login = loggedIn
    );
  }

}
