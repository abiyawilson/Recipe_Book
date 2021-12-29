import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent implements OnInit {
  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute
  ) {}

  login: boolean = false;

  ngOnInit(): void {
    this.recipeService.login.subscribe(
      (loggedIn: boolean) => (this.login = loggedIn)
    );
  }

  onReset(): void {
    this.login = false;
    this.recipeService.userLoggedIn = false
  }
}
