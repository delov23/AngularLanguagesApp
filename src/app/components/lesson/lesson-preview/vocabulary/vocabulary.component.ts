import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWord } from 'src/app/components/shared/models/ILesson';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent implements OnInit {
  @Input('words') words: IWord[];
  displayedColumns: string[] = ['word', 'translation'];
  @Output() selectTabEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectTab(number: number) {
    this.selectTabEmitter.emit(number);
  }

}
