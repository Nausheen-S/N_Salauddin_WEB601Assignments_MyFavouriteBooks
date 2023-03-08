import { NgClass } from '@angular/common';
import { Component, Input, OnInit  } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content: Content[] | undefined;
  searchText : string = "";
  message: string = "";
  contentItems: any;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getContent().subscribe(data => {
      this.content = data;
      this.addContentCard(1);
    });
  }

  onSearch() {
    const result = this.contentItems.find(content => content.title === this.searchText);
    console.log(result);
    if(result) {
      this.message = "Content with this title exists";
    }
    else{
      this.message = "Content with this title does not exist";
    }
  }

  addContentCard(id: number) {
    this.bookService.getContentById(id).subscribe(data => {
      if (data !== undefined) {
        this.content.unshift(data);
      }
    });
  }
  
}
