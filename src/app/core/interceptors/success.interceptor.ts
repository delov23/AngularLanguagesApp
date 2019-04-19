import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
    constructor (private toastrService: ToastrService) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                let message;
                if (req.url.endsWith('signup')) {
                    message = 'Successful Registration. You may now log in.';
                } else if (req.url.endsWith('signin')) {
                    message = 'Welcome to Lingo!';
                } else if (req.url.includes('user/addCourse')) {
                    message = 'Course Completed!';
                } else if (req.url.includes('create')) {
                    message = 'Created Successfully.';
                } else if (req.url.includes('remove')) {
                    this.toastrService.info('Removed Successfully.');
                }
                if (message) this.toastrService.success(message);
            }
        }));
    }
}