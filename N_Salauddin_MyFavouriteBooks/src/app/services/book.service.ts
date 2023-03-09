import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import { MessageService } from '../message.service';



@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private messagesService: MessageService) { }

  getContent(): Observable<Content[]> {
    this.messagesService.add('Content array loaded!');
    return of(CONTENT);
  }

  getContentById(id: number): Observable<Content> {
    const content = CONTENT.find(content => content.id === id);
    if (content) {
      return of(content);
    } else {
      throw new Error(`Content with id ${id} not found`);
    }
  }

}
