import { Injectable } from '@angular/core';
import { ApplicationUrls } from '../../shared/application-urls';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: any = ApplicationUrls.baseApi;
//  authUrl: any = this.baseUrl + ApplicationUrls.auth.login;
  private roleSubject = new BehaviorSubject<any>(null);
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // this.bypassAuth();
  }

  loginRegistredUser(data) {
    return this.http.post(ApplicationUrls.auth.login, data).pipe(
      map (res => res)
    );
  }
}
