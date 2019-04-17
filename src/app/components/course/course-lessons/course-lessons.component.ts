import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { ActivatedRoute } from '@angular/router';
import { ILesson } from '../../shared/models/ILesson';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-course-lessons',
  templateUrl: './course-lessons.component.html',
  styleUrls: ['./course-lessons.component.css']
})
export class CourseLessonsComponent implements OnInit {
  lessons$: Observable<{ lessons: ILesson[], message: string; }>;
  isAdmin: boolean;
  constructor(private courseService: CourseService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    let id: string = this.route.snapshot.params['id'];
    this.lessons$ = this.courseService.getLessonsByCourse(id);
  }
}
