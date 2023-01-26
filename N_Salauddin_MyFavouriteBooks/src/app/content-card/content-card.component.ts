import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent  {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

    this.contentList.add({
      id: 1,
      title: "Content 1",
      description: "This is my content 1",
      creator: "John Doe",
      imgURL: "../../assets/images/WebDevLogo.png",
      type: "blog 1"
    });

    this.contentList.add({
      id: 2,
      title: "Content 2",
      description: "This is my content 2",
      creator: "John Doe",
      imgURL: "../../assets/images/WebDevLogo.png",
      type: "blog 2"
    });

    this.contentList.add({
      id: 3,
      title: "Content 3",
      description: "This is my content 3",
      creator: "John Doe",
      imgURL: "../../assets/images/WebDevLogo.png",
      type: "blog 3"
    });
  }

}