import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl=environment.baseUrl
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) { }
  signIn(user: any) {
    return this.http.post<any>(this.baseUrl + 'login/', user)
  }
  getToken() {
    return localStorage.getItem('access');
  }
  get isLoggedIn(): boolean {
    debugger
    let authToken = this.getToken();
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
}