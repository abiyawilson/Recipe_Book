import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenicationService, AuthResponseData } from '../auth/authenication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  newUser: boolean = false
  isLoading = false;
  error: string = null;
  email:string;
  password:string;

  authForm:FormGroup;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private authService : AuthenicationService
  ) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  onSubmit() {
    this.email = this.authForm.value.email;
    this.password = this.authForm.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (!this.newUser) {
      authObs = this.authService.login(this.email, this.password);
      

    } else {
      authObs = this.authService.signup(this.email, this.password);
      this.newUser = false
    }

    authObs.subscribe(
      resData => {
        this.isLoading = false;
        this.route.navigate(['../home'], { relativeTo: this.router });
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    this.authForm.reset();
  }

  newUsers() {
    this.newUser = true
  }

  cancel(): void {
    this.authForm.reset();
    this.route.navigate(['../home'], { relativeTo: this.router });
  }
}
