import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor (private authService: AuthService) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (!req.url.includes('/auth/')) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authService.token}`,
                    'Content-Type': 'application/json',
                }
            });
        } else {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                }
            });
        }

        return next.handle(req);
    }
}