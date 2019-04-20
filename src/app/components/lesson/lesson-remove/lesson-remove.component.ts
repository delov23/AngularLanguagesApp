import { Component, OnInit } from '@angular/core';
import { ILesson } from '../../shared/models/ILesson';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from 'src/app/core/services/lesson.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lesson-remove',
  templateUrl: './lesson-remove.component.html',
  styleUrls: ['./lesson-remove.component.css']
})
export class LessonRemoveComponent implements OnInit {
  lesson: ILesson;
  lessonId: string;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private lessonSevice: LessonService, private router: Router) { }

  ngOnInit() {
    this.lesson = this.route.snapshot.data['lesson']['lesson'];
    this.lessonId = this.route.snapshot.params['id'];
  }

  removeLesson() {
    this.subscription = this.lessonSevice.removeLessonById(this.lessonId)
      .subscribe((res) => {
        this.subscription.unsubscribe();
        this.router.navigate(['/course/lessons', this.lesson.course._id]);
      })
  }

}
