import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // How To: Create a collapse menu or the nav-bar sets the initial state of the menu collapsed or expanded
  isCollapsed = true;
  title = 'Maths App';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * How activate naviagtion programatically.
   * The submit navigation action overrides the button click action. Angular must remove the naviagtion from the the event queue.
   *
   */
  home() {
    this.router.navigate(['/progress']);
  }

  onSubmit() {
    this.router.navigate(['/learn']);
  }
}
