import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isAuth: boolean;
  isAdmin: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated();
    this.isAdmin = this.authService.isAdmin();
  }

}
