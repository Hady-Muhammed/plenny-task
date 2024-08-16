import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { RestService } from './rest.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private rest: RestService, private router: Router) {}

  logIn(username: string, password: string) {
    const body = {
      username,
      password,
    };
    this.rest.post('auth/login', body).then((res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl('/');
    });
  }

  signUp(body: any) {
    this.rest.post('users/add', body).then((res) => {
      this.router.navigateByUrl('/login');
    });
  }
}
