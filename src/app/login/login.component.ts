import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    stayLoggedIn: new FormControl()
  });

  login() {
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
    console.log(this.loginForm.value.stayLoggedIn);
  }
}
