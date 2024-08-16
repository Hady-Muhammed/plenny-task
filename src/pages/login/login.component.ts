import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logIn() {
    this.authService.logIn(this.userName, this.password);
  }
}
