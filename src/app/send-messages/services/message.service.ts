import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import {Message} from "../model/message.entity";
@Injectable({
  providedIn: 'root'
})
export class MessageService extends BaseService<Message> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/messages';
  }
}
