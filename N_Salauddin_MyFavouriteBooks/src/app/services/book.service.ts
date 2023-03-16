import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private contentUrl = 'api/content';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messagesService: MessageService) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>(this.contentUrl).pipe(
      tap((_) => this.log('fetched content')),
      catchError(this.handleError<Content[]>('getContent', []))
    );
  }

  getContentById(id: number): Observable<Content> {
    const url = `${this.contentUrl}/${id}`;
    return this.http.get<Content>(url).pipe(
      tap((_) => this.log(`Fetched content id=${id}`)),
      catchError(this.handleError<Content>(`getContentById id=${id}`))
    );
  }

  updateContent(content: Content): Observable<any> {
    return this.http.put(this.contentUrl, content).pipe(
      tap(() => this.log(`updated content id=${content.id}`)),
      catchError(this.handleError<any>('updateContent'))
    );
  }

  // addContent(content: Content): Observable<Content> {
  //   return this.http.post<Content>(this.contentUrl, content)
  //   .pipe(
  //     tap((newContent) => {
  //       if (newContent && newContent.id) {
  //         console.log(`${newContent.id}`);
  //         this.log(`added content w/ id=${newContent.id}`);
  //       } else {
  //         this.log('added content');
  //       }
  //     }),
  //     catchError(this.handleError<Content>('addContent'))
  //   );
  //   }
  // addContent(content: Content): Observable<Content> {
  //   console.log('addContent() called');
    
  //   return this.http.post<Content>(this.contentUrl, content, this.httpOptions)
  //     .pipe(
  //       tap((newContent) => {
  //         if (newContent && newContent.id) {
  //           console.log(`Added content with ID ${newContent.id}`);
  //           this.log(`added content w/ id=${newContent.id}`);
  //         } else {
  //           this.log('added content');
  //         }
  //       }),
  //       catchError(this.handleError<Content>('addContent', content))
  //       );
  // }
  addContent(content: Content): Observable<Content> {
    console.log('addContent() called');
    
    return timer(3000) // add a delay of 3 seconds
      .pipe(
        switchMap(() => this.http.post<Content>(this.contentUrl, content,this.httpOptions)),
        tap((newContent) => {
          if (newContent && newContent.id) {
            console.log(`Added content with ID ${newContent.id}`);
            this.log(`added content w/ id=${newContent.id}`);
            this.getContent().subscribe((data) => {
              console.log(data);
            });
          } else {
            this.log('added content');
          }
        }),
        catchError(this.handleError<Content>('addContent', content))
      );
  }
  

  deleteContent(content: Content | number): Observable<Content> {
    const id = typeof content === 'number' ? content : content.id;
    const url = `${this.contentUrl}/${id}`;

    return this.http.delete<Content>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted content id=${id}`)),
      catchError(this.handleError<Content>('deleteContent'))
    );
  }

  searchContents(term: string): Observable<Content[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Content[]>(`${this.contentUrl}/?title=${term}`).pipe(
      catchError(this.handleError<Content[]>('searchContents', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messagesService.add('Content array loaded!');
  }

}
