import { Component, OnInit, Input } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'N_Salauddin_MyFavouriteBooks';
  contentItems: Content[] = [];
  @Input() topContent: Content | undefined;
  id: number = 1;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getContent().subscribe(data => {
      this.contentItems = data;
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
