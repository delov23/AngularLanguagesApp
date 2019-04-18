import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { IUser } from 'src/app/components/shared/models/IUser';

@Injectable()
export class UserResolver implements Resolve<{ message: string; user: IUser }> {
    constructor(private userService: UserService, private authService: AuthService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ message: string; user: IUser }> {
        const userId: string = this.authService.userId;

        return this.userService.getUserProfile(userId);
    }
}