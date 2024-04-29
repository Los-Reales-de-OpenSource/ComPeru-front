import { Component } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-message-sended',
  standalone: true,
  imports: [MatTableModule,MatCardModule,MatExpansionModule,MatIconModule],
  templateUrl: './message-sended.component.html',
  styleUrl: './message-sended.component.css'
})
export class MessageSendedComponent {

}
