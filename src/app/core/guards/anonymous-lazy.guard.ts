import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LazyAnonymousGuard implements CanLoad {
  constructor (private authService: AuthService, private router: Router) {}      
  
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    console.log('HERE');
    if (!this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
