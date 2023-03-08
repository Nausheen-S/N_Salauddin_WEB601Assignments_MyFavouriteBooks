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
  contentItems: Content[]= [];
  
  searchText : string = "";
  message: string = "";
  

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getContent().subscribe(data => {
      this.contentItems = data;
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

  
}
