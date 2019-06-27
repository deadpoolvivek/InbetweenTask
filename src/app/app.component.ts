import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material';
import {UserService} from './services/user.service';
const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'CIDE ADMIN';
  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  users: Observable<any>;
  isDarkTheme = false;
  dir = 'ltr';
  user: any;
  selectedLanguage;
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  constructor(zone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) {}


  ngOnInit() {
    if(this.router.navigate(['/'])){
      this.router.navigate(['dashboard']);
    }
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });

  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
  toggleDir() {
    this.dir = this.dir === 'ltr' ? 'rtl' : 'ltr';
    this.sidenav.toggle().then(() => this.sidenav.toggle());
  }

}
