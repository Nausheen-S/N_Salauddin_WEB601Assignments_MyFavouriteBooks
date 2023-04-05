import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { BookService } from '../services/book.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContentDialogComponent } from '../content-dialog/content-dialog.component';
import { MessageService } from '../message.service';

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
    tags: [] ,
    id: null
  }


  constructor(private bookService: BookService, private dialog: MatDialog,private messagesService: MessageService) {}

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
    
  openDialog(): void {
    const dialogRef: MatDialogRef<ContentDialogComponent> = this.dialog.open(ContentDialogComponent, {
      width: '500px',
      data: { title: 'Add Book' } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.bookService.addContent(result).subscribe(() => {
        //   this.messagesService.add(`Content added: ${result.title}`);
        //   this.contentAdded.emit(result);
        // });
        this.messagesService.add(`Content added: ${result.title}`);
        this.contentAdded.emit(result);
        this.bookService.addContent(result).subscribe();
      }
      dialogRef.componentInstance.contentAdded.subscribe((content: Content) => {
        console.log(`Content added: ${content.title}`);
        this.contentAdded.emit(content);
      });
    });
  }
  
}
