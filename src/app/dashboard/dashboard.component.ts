import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
@Component({
  selector: 'cide-ad-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listUser: any;
  listUserDragged: any;
  user: User; // user model

  constructor(private userService: UserService, private router: Router, ) {
    this.user = new User();
  }

  ngOnInit() {
    this.getUSers();
  }

  // drop function
  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  // function to get the list of users
  getUSers() {
    this.userService.geUser().subscribe((res: any) => {
      this.listUser = res.results;
      console.log(res);
    });
  }

  // Function to redirect to the profile page
  detailUser(event) {
    this.router.navigate(['profile/', event.login.uuid]);
  }
}
