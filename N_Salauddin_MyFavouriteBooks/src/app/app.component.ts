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
      this.messagesService.add('Content array loaded!');
      this.contentItems = data;
    });
    
  }

  showContentById() {
    const id = +this.id;
    if (isNaN(id) || id < 1 || id > CONTENT.length) {
      this.messagesService.add('Invalid id entered!');
      return;
    }
    this.bookService.getContentById(id).subscribe(content => {
      this.topContent = content;
      this.messagesService.add(`Content Item at id: ${content.id}`);
    });
  }

  // addContentCard(content: Content) {
  //   this.bookService.getContentById(content.id).subscribe(content => {
  //     if (content !== undefined) {
  //       // this.contentItems.unshift(content);
  //       this.topContent = content;
  //       this.messagesService.add(`Content Item at id: ${content.id}`);
  //     }
  //   });
  // }
}
