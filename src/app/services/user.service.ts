import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { ApplicationUrls } from '../shared/application-urls';
import { ErrorHandlerService } from '../shared/error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [];

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  // Service to get 20 records
  geUser() {
    return this.http.get(ApplicationUrls.user.getUser + '?results=20').pipe(
      tap((u: any) => {
        console.log(u.results);
        //result is stored in users array
        this.users = u.results;
      }),
      catchError(this.errorHandler.handleError('getSchool', [])));
  }


  // Service to get the selected user data
  getUserById(id: string) {
    return this.users.find( u => u.login.uuid === id);
  }
}
