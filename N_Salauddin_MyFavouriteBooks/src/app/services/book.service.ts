import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getContent(): Observable<Content[]> {
    return of(CONTENT);
  }

  getContentById(id: number): Observable<Content | undefined> {
    return of(CONTENT.find(content => content.id === id));
  }
}
