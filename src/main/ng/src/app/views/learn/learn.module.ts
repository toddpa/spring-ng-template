import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LearnComponent } from '../learn/learn.component';
import { TopicsComponent } from '../learn/topics/topics.component';
import { QuestionsComponent } from '../learn/topics/questions/questions.component';
import { ExamplesComponent } from '../learn/topics/examples/examples.component';
import { DocumentComponent } from '../learn/topics/document/document.component';
import { ExampleComponent } from '../learn/topics/example/example.component';
import { QuestionComponent } from '../learn/topics/question/question.component';


const routes = [
  {
    path: 'learn',
    component: LearnComponent
  },
  {
    path: 'topics',
    component: TopicsComponent
  },
  {
    path: 'notes',
    component: DocumentComponent
  },
  {
    path: 'examples',
    component: ExamplesComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  }];

@NgModule({
  declarations: [
    LearnComponent,
    TopicsComponent,
    QuestionsComponent,
    ExamplesComponent,
    DocumentComponent,
    ExampleComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    // How To: Create a feature module that includes its own navigation
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [LearnComponent]
})
export class LearnModule { }
