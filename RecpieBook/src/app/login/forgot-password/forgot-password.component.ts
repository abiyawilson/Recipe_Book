import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenicationService } from 'src/app/auth/authenication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  error: string;
  isAlert : boolean = false

  constructor(
    private authService: AuthenicationService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    this.authService.forgotPassword(email).subscribe(
      (resData) => {
        this.isAlert = true
      },
      (errorMessage) => {
        this.error = errorMessage;
      }
    );
    setTimeout(()=>{
      form.reset();
      this.route.navigate(['/login'], { relativeTo: this.router });
    },5000)
  }

  cancel(): void {
    this.route.navigate(['/login'], { relativeTo: this.router });
  }
}
