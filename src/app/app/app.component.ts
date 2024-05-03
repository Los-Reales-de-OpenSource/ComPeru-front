import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './services/auth.service'

//Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponent } from "./public/toolbar/toolbar.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


//import { ToolbarComponent } from './public/toolbar/toolbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, RouterLink,
    MatIconModule,MatDividerModule,
    MatInputModule,MatFormFieldModule,
    MatButtonModule,MatCardModule,MatSidenavModule,MatListModule, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
