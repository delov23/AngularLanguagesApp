import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LazyAuthGuard implements CanLoad {
  constructor (private authService: AuthService, private router: Router) {}      
  
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
