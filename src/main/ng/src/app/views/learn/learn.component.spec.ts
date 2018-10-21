import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnComponent } from '../learn/learn.component';
import { TopicsComponent } from '../learn/topics/topics.component';
import { QuestionsComponent } from '../learn/topics/questions/questions.component';
import { ExamplesComponent } from './topics/examples/examples.component';
import { DocumentComponent } from './topics/document/document.component';
import { ExampleComponent } from './topics/example/example.component';
import { QuestionComponent } from './topics/question/question.component';
import { LearnModule} from './learn.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('LearnComponent', () => {
  let component: LearnComponent;
  let fixture: ComponentFixture<LearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LearnComponent,
        TopicsComponent,
        ExamplesComponent,
        DocumentComponent,
        ExampleComponent,
        QuestionComponent
     ],
     imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
