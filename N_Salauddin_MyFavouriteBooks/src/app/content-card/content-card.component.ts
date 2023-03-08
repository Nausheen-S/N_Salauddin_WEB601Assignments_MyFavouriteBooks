import { Component, Input } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

export class ContentCardComponent  {
  @Input()item;

  isFirst: boolean = false;
  isLast: boolean = false;

  @Input()content!: Content;

  isTopContent(): boolean {
    return this.content.id === 1;
  }
  

  log(){
    console.log("ID: " + this.item.id);
    console.log("Title: " + this.item.title);
  }
}
