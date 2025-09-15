import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from "@angular/material/sidenav";
import { RouterLink } from "@angular/router";
import { MatListModule } from '@angular/material/list';
import { MatToolbar } from "@angular/material/toolbar";


/**
 * @title Menu positioning
 */
@Component({
  selector: 'nav',
  templateUrl: 'nav.html',
  imports: [MatButtonModule, MatMenuModule, MatDrawer, RouterLink, MatSidenavModule, MatListModule, MatToolbar],
})
export class Nav {}
