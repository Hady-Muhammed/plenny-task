import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  email: any;
  password: any;
  name: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  signUp() {
    this.authService.signUp({
      name: this.name,
      password: this.password,
    });
  }
}
