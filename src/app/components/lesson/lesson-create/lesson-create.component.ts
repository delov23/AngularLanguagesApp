import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICourse } from '../../shared/models/ICourse';
import { CourseService } from 'src/app/core/services/course.service';
import { LessonService } from 'src/app/core/services/lesson.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.css']
})
export class LessonCreateComponent implements OnInit {
  form: FormGroup;
  words: FormArray;
  test: FormArray;
  courses$: Observable<{ message: string; courses: ICourse[]; }>
  constructor(private fb: FormBuilder, private courseService: CourseService, private lessonService: LessonService, private router: Router) { }

  ngOnInit() {
    this.courses$ = this.courseService.getAllCourses();

    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      grammar1: ['', Validators.required],
      grammar2: ['', Validators.required],
      grammar3: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern(/^http.{3,}\.(jpg|png)$/)]],
      course: ['', Validators.required],
      words: this.fb.array([ this.createWord() ]),
      test: this.fb.array([ this.createQuestion() ])
    });
  }

  createWord() {
    return this.fb.group({
      word: ['', Validators.required],
      translation: ['', Validators.required]
    });
  }

  createQuestion() {
    return this.fb.group({
      question: ['', Validators.required],
      answer: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
      a1: ['', Validators.required],
      a2: ['', Validators.required],
      a3: ['', Validators.required],
    });
  }

  addWord() {
    this.words = this.form.get('words') as FormArray;
    this.words.push(this.createWord());
  }

  addQuestion() {
    this.test = this.form.get('test') as FormArray;
    this.test.push(this.createQuestion());
  }

  createLesson() {
    let { title, grammar1, grammar2, grammar3, image, course, words, test } = this.form.value;
    let body = {
      title,
      grammar: [grammar1, grammar2, grammar3],
      image,
      course,
      words: JSON.stringify(words),
      test: JSON.stringify(test)
    }
    this.lessonService.createLesson(body)
      .subscribe((res) => {
        this.router.navigate(['/course/lessons', course]);
      })
  }

}
