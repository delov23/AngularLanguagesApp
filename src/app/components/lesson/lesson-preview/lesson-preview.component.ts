import { Component, OnInit } from '@angular/core';
import { ILesson } from '../../shared/models/ILesson';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lesson-preview',
  templateUrl: './lesson-preview.component.html',
  styleUrls: ['./lesson-preview.component.css']
})
export class LessonPreviewComponent implements OnInit {
  lesson: ILesson;
  selectedIndex = 0;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.lesson = this.route.snapshot.data['lesson']['lesson'];
  }

  selectTab (index: number): void {
    this.selectedIndex = index;
  }

  completeLesson() {
    this.subscription = this.userService.userAddCourse(this.lesson.course._id, this.authService.userId)
      .subscribe((res) => {
        this.subscription.unsubscribe();
        this.router.navigate(['/dashboard']);
      })
  }

}
