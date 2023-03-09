import { Component, OnInit, Input } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDb';
import { MessageService } from './message.service';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'N_Salauddin_MyFavouriteBooks';
  contentItems: Content[] = [];
  content!: Content;
  @Input() topContent: Content | undefined;
  id: number = 1;

  constructor(private bookService: BookService,  private messagesService: MessageService) { }

  ngOnInit() {
    this.bookService.getContent().subscribe(data => {
      this.contentItems = data;
    });
    
  }

  getContentById(): void {
    if (isNaN(this.id) || this.id < 1 || this.id > CONTENT.length) {
      this.messagesService.add('An error occurred.');
      return;
    }
    this.bookService.getContentById(this.id).subscribe(content => {
        this.content = content;
    });
  }

  addContentCard(id: number) {
    this.bookService.getContentById(id).subscribe(data => {
      if (data !== undefined) {
        this.contentItems.unshift(data);
        this.topContent = data;
      }
    });
  }
}
