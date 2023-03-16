import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();

  newContent: Content = {
    title: '',
    description: '',
    creator: '',
    image: '',
    type: '',
    tags: [],
    id: null
  }

  constructor(private bookService: BookService) {}

  addContent(): void {
    console.log('addContent() called emit');

    this.bookService
      .addContent(this.newContent)
      .subscribe(newContent  => { 
        console.log('addContent() called emit'); 
        this.contentAdded.emit(newContent);
        this.newContent = {
          id: null,
          title: '',
          description: '',
          creator: '',
          image: '',
          type: '',
          tags: [],
        };

      });
      
    }
  }
