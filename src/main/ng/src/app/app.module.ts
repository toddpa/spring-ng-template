import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarRoutingModule } from './navbar/navbar-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlankComponent } from './views/blank/blank.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { ProgressComponent } from './views/progress/progress.component';
// import { CreateComponent } from './views/create/create.component';
// import { LearnModule } from './views/learn/learn.module';
// import { OrderManagerComponent } from './views/order-manager/order-manager.component';

/*
const routes = [
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // OrderManagerComponent,
    // ProgressComponent,
    // CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // How To: Create a collapse menu or the nav-bar. We need ngBootstrap module
    NgbModule.forRoot(),
    NavbarRoutingModule
    // RouterModule.forRoot(routes),
    // LearnModule // Fearture module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
