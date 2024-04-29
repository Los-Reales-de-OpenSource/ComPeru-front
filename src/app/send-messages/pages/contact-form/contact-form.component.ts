import { Component } from '@angular/core';
import { AfterViewInit, OnInit, ViewChild} from '@angular/core';
import {CreateMessageComponent} from "../../components/create-message/create-message.component";
import {MessageService} from "../../services/message.service";
import {Message} from "../../model/message.entity";
import { NgClass } from "@angular/common";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CreateMessageComponent,NgClass,MatTableModule,MatCardModule,MatExpansionModule,MatIconModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  panelOpenState = false;
  messageData: Message;
  dataSource!: MatTableDataSource<any>;
  isMessageSended: boolean;

  constructor(private messageService: MessageService) {
    this.messageData = {} as Message;
    this.isMessageSended = false;
    this.dataSource = new MatTableDataSource<any>();
  }

  private resetEditState(): void {
    this.isMessageSended = false;
    this.messageData = {} as Message;
  }

  private createMessage() {
    this.messageService.create(this.messageData).subscribe((response: any) => {
      console.log('Mensaje creado correctamente', response);
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((message: Message) => { return message; });
    });
  }

  onMessageAdded(element: Message) {
    this.messageData = element;
    console.log('Estamos por crear el mensaje');
    this.createMessage();
    this.resetEditState();
  }

}


