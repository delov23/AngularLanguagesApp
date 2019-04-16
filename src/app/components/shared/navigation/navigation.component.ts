import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, DoCheck {
  isAuth: boolean;
  isAdmin: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated();
    this.isAdmin = this.authService.isAdmin();
  }

  ngDoCheck() {
    this.isAuth = this.authService.isAuthenticated();
    this.isAdmin = this.authService.isAdmin();
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
