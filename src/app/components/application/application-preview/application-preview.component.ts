import { Component, OnInit } from '@angular/core';
import { IApplication } from '../../shared/models/IApplication';
import { Observable, Subscription } from 'rxjs';
import { ApplicationService } from 'src/app/core/services/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-application-preview',
  templateUrl: './application-preview.component.html',
  styleUrls: ['./application-preview.component.css']
})
export class ApplicationPreviewComponent implements OnInit {
  application$: Observable<{message: string; application: IApplication }>;
  isAdmin = false;
  id: string;
  subscription: Subscription;

  constructor(private router: Router, private authService: AuthService, private applicationService: ApplicationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAdmin = this.authService.isAdmin();
    this.application$ = this.applicationService.getById(this.id);
  }

  approve(value: number) {
    this.subscription = this.applicationService.approve(value, this.id)
      .subscribe((res) => {
        this.subscription.unsubscribe();
        this.router.navigate(['/application/admin']);
      })
  }

}
