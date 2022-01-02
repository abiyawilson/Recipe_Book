import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthenicationService } from './auth/authenication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthenicationService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
