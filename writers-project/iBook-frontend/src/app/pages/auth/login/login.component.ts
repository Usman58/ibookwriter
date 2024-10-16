import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  show=false;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private _aS: AuthService,private router:Router
  ) { }
  get lF() {
    return this.loginForm.controls;
  }
  onSubmit() {
    const loginData = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    };
    this._aS.doLogout();
    this._aS.signIn(loginData).subscribe(
      (res: any) => {
        debugger
        if (res) {
          console.log("Login response:", res);
          localStorage.setItem("access",res.access);
          this.router.navigateByUrl('/projects');
        }
      }, (error: any) => {
        console.error("Internal Server Error", error);
      });

  }
  password() {
    this.show = !this.show;
  }

}
