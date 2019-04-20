import { HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    
    constructor (private toastr: ToastrService, private router: Router, private authService: AuthService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)
            .pipe(
                catchError((err: HttpErrorResponse) => {
                    console.log(err);
                    if (err.status === 401 || err.status === 403) {
                        this.toastr.error('You are not authorised!', 'Error!');
                        this.authService.logoutUser();
                        this.router.navigate(['/login']);
                    } else if (err.status === 400 || err.status === 422) {
                        this.toastr.error('Please, check the form requirements and submit the form again!', 'Error!');
                    } else if (err.status === 404) {
                        this.toastr.error('The entity is not found!', 'Error!');
                        this.router.navigate(['/dashboard']);
                    } else {
                        this.toastr.error('Something went wrong!', 'Error!');
                    }
                 
                    return throwError(err);
                }
            ));
    }
}