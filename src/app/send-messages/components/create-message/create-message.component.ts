import { Component } from '@angular/core';
import {EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, NgForm} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {Message} from "../../model/message.entity";
import {NgClass, NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-create-message',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, FormsModule, NgIf, NgClass],
  templateUrl: './create-message.component.html',
  styleUrl: './create-message.component.css'
})
export class CreateMessageComponent {
  @Input() message: Message;
  @Input() send : boolean;
  @Output() messageAdded = new EventEmitter<Message>();


  @ViewChild('messageForm', {static: false}) messageForm!: NgForm;

  constructor() {
    this.message={} as Message;
    this.send=false;
  }

  //methods

  private resetEditState() {
    this.message = {} as Message;
    this.messageForm.resetForm();
  }

  onSubmit() {
    if (this.messageForm.form.valid) {
      let emitter =  this.messageAdded;
      emitter.emit(this.message);
      // this.resetEditState();
      this.send=true;
    } else {
      console.error('Invalid data in form');
    }
  }

  onClickOk() {
    this.resetEditState();
    this.send = false; // Oculta la pantalla de mensaje enviado
  }



}
