import { Component } from '@angular/core';
import { HeaderComponent } from "../../../public/components/header/header.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
