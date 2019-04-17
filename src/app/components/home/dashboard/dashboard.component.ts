import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { Observable } from 'rxjs';
import { ICourse } from '../../shared/models/ICourse';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courses$: Observable<{ courses: ICourse[]; message: string; }>;
  isAdmin: boolean;
  constructor(private courseService: CourseService, private authService: AuthService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.courses$ = this.courseService.getAllCourses();
  }
}