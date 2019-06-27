import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cide-ad-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  login() {
  const data = {
    email: this.loginForm.value.email,
    password: this.loginForm.value.password
  };
  this.authService.loginRegistredUser(data)
  .subscribe((res: any) => {
    console.log(res);
  });
}

}
