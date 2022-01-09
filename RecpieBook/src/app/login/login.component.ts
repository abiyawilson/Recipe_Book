import { Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthenicationService, AuthResponseData } from '../auth/authenication.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { AlertPlaceHolderDirective } from '../shared/placeHolders/alert-place-holder.directive';

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

  private closeSub: Subscription;

  @ViewChild(AlertPlaceHolderDirective, { static: false }) alertHost: AlertPlaceHolderDirective;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private authService : AuthenicationService,
    private componentFactoryResolver: ComponentFactoryResolver
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
        this.showErrorAlert(errorMessage);
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

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

  private showErrorAlert(message: string) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
