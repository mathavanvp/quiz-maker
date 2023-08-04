import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTestscreenComponent } from './quiz-testscreen.component';

describe('QuizTestscreenComponent', () => {
  let component: QuizTestscreenComponent;
  let fixture: ComponentFixture<QuizTestscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizTestscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizTestscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
