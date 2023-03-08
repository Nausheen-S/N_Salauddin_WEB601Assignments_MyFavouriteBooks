import { Component, Input } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

export class ContentCardComponent  {
  @Input()item;
  @Input() boxShadow!: boolean;

  isFirst: boolean = false;
  isLast: boolean = false;
  

  @Input()contentItems!: Content;

  log(){
    console.log("ID: " + this.item.id);
    console.log("Title: " + this.item.title);
  }
  
  get cardClasses() {
    return {
      'content-card': true,
      'content-card-shadow': this.boxShadow
    };
  }
}
