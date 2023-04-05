import { Component, OnInit, Inject ,Output, EventEmitter, Optional, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';


export interface DialogData {
  title: string;
}

@Component({
  selector: 'app-content-dialog',
  templateUrl: './content-dialog.component.html',
  styleUrls: ['./content-dialog.component.scss'],
})
export class ContentDialogComponent implements OnInit {

  @Output() contentAdded = new EventEmitter<Content>();



  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator: '',
    image: '',
    type: '',
    tags: []
  };
  contentType: string;

  constructor(public dialogRef: MatDialogRef<ContentDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {DialogData, contentType}) {    
    this.contentType = data.contentType;
  }

  ngOnInit(): void {
    this.newContent.type = this.data.contentType;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  add(): void {
    this.dialogRef.close(this.newContent);
  }

  
}
  


  


