import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from 'src/app/core/services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      language: ['', Validators.required],
      flag: ['', [Validators.pattern(/http.{3,}\.(jpg|png)/), Validators.required]]
    });
  }

  createCourse() {
    this.courseService.createCourse(this.form.value).subscribe((res) => {
      this.router.navigate(['/dashboard']);
    })
  }
}
