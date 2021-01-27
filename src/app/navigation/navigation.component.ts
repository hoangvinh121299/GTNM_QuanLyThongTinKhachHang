import { UiService } from './../services/ui/ui.uiservices';
import { Component,OnDestroy, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  showMenu = false;
  darkmodeActive= false;
  sub1: any;
  userEmail = '';

  constructor(public ui: UiService) {
  }

  ngOnInit(): void
  {
    this.sub1 = this.ui.darkModeState.subscribe((value) => {
    this.darkmodeActive = value;
  });
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkmodeActive);
  }
}
