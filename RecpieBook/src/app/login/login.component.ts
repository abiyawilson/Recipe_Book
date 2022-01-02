import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenicationService, AuthResponseData } from '../auth/authenication.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  newUser: boolean = false
  isLoading = false;
  error: string = null;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private authService : AuthenicationService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (!this.newUser) {
      authObs = this.authService.login(email, password);
      

    } else {
      authObs = this.authService.signup(email, password);
      this.newUser = false
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.route.navigate(['../home'], { relativeTo: this.router });
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }

  newUsers() {
    this.newUser = true
  }

  cancel(): void {
    this.route.navigate(['../home'], { relativeTo: this.router });
  }
}
