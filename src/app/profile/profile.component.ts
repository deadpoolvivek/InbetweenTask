import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  subscription: any;
  uid: any;

  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        //if url has user id
        if (params.hasOwnProperty('id')) {
          this.uid = params['id'];
          this.getSelectedUser(params['id']);
        }
      });
  }

  // get the data of selected user
  getSelectedUser(id: string) {
    this.user = this.userService.getUserById(id);
    //console.log(this.user);
    if (!this.user) {
      this.goBack();
    }
  }

  //function will redirect to dashboard page
  goBack() {
    this.router.navigate(['dashboard']);
  }
}
