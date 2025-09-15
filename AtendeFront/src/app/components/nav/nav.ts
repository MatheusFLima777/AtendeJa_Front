import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

/**
 * @title Menu positioning
 */
@Component({
  selector: 'nav',
  templateUrl: 'nav.html',
  styleUrls: ['nav.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ]
})
export class Nav {}
