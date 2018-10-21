import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LearnComponent } from '../views/learn/learn.component';
import { ProgressComponent } from '../views/progress/progress.component';
import { CreateComponent } from '../views/create/create.component';
import { TopicsComponent } from '../views/learn/topics/topics.component';
import { OrderManagerComponent } from '../views/order-manager/order-manager.component';

const routes = [
  {
    path: 'learn',
    component: LearnComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'topics',
    component: TopicsComponent
  },
  {
    path: 'orders',
    component: OrderManagerComponent
  }
];

@NgModule({
  declarations: [
    LearnComponent,
    ProgressComponent,
    CreateComponent,
    TopicsComponent,
    OrderManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
