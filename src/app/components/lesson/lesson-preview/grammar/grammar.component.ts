import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css']
})
export class GrammarComponent implements OnInit {
  @Input('grammar') grammar: string[];
  @Output() selectTabEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectTab(number: number) {
    this.selectTabEmitter.emit(number);
  }

}
