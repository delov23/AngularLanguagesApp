import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IQuestion } from 'src/app/components/shared/models/ILesson';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input('test') test: IQuestion[];
  @Output() selectTabEmitter = new EventEmitter<number>();
  @Output() completeLessonEmitter = new EventEmitter();

  disableDone: boolean = true;
  correctAnswers: number = 0;

  constructor() { }

  ngOnInit() {
  }

  selectTab(number: number) {
    this.selectTabEmitter.emit(number);
  }

  completeLesson() {
    this.completeLessonEmitter.emit();
  }

  handleAnswer(event: Event): void {
    let el = event.currentTarget;
    let isCorrect = el['dataset']['correct'] === 'false' ? false : true;
    el['style']['color'] = 'black'
    if (isCorrect) {
      el['style']['background-color'] = '#8effb9';
      el['disabled'] = true;
      this.correctAnswers += 1;
      if (this.correctAnswers === this.test.length) {
        this.disableDone = false;
      }
    } else {
      el['style']['background-color'] = '#f99e98';
    }
  }

}
