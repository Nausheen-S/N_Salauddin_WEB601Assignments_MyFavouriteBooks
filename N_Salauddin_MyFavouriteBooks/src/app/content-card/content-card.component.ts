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
  @Input()
  content!: Content;
  isFirst: boolean = false;
  isLast: boolean = false;
  tags: string[] | undefined;

  ngOnInit(): void {
    this.tags = this.content.tags || [];
  }

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
