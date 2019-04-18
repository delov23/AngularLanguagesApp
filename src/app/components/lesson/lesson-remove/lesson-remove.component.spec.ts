import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonRemoveComponent } from './lesson-remove.component';

describe('LessonRemoveComponent', () => {
  let component: LessonRemoveComponent;
  let fixture: ComponentFixture<LessonRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
