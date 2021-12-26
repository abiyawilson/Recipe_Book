import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('username', { static: false }) usernameInputRef: ElementRef;
  @ViewChild('password', { static: false }) passwordInputRef: ElementRef;

  uname: string;
  password: string;

  constructor(private route: Router, private router: ActivatedRoute,
              private recipeService: RecipesService) {

   }

  ngOnInit(): void {
  }

  login(): void{
    this.uname = this.usernameInputRef.nativeElement.value;
    this.password = this.passwordInputRef.nativeElement.value;

    if (this.uname === 'user' && this.password === 'tiger') {
      // this.recipeService.login.emit(true);
      this.route.navigate(['../contributor'], {relativeTo: this.router});
    }
  }

  cancel(): void{
    this.route.navigate(['../home'], {relativeTo: this.router});
  }

}
