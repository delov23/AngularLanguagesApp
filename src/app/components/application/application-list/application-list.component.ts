import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IApplication } from '../../shared/models/IApplication';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApplicationService } from 'src/app/core/services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  applications$: Observable<{ message: string; applications: IApplication[] }>;
  isAdmin: boolean = false;
  constructor(private route: ActivatedRoute, private authService: AuthService, private applicationService: ApplicationService) { }

  ngOnInit() {
    if (this.route.snapshot.toString().includes('admin') && this.authService.isAdmin()) {
      this.isAdmin = true;
      this.applications$ = this.applicationService.getAll();
    } else {
      this.applications$ = this.applicationService.getByUserId(this.authService.userId);
    }
  }

}
