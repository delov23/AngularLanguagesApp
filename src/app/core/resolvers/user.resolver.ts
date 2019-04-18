import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserResolver implements Resolve<{ message: string; user: /* IUser */ any }> {
    constructor(private userService: UserService, private authService: AuthService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ message: string; user: any /* IUser */ }> {
        const userId: string = this.authService.userId;

        return this.userService.getUserProfile(userId);
    }
}