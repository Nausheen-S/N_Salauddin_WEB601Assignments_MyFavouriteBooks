import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentItems = [
    {
      id: 1,
      image: "../../assets/images/WebDevLogo.png",
      title: "book 1",
      description: "Description of book 1",
      creator: "Creator 1",
      type: "Text",
      tags: ["tag1", "tag2"]
    },
    {
      id: 2,
      image: "../../assets/images/WebDevLogo.png",
      title: "book 2",
      description: "Description of book 2",
      creator: "Creator 2",
      type: "Image",
      tags: ["tag3", "tag4"]
    },
    {
      id: 3,
      image: "../../assets/images/WebDevLogo.png",
      title: "book 3",
      description: "Description of book 3",
      creator: "Creator 3",
      type: "Video",
      tags: ["tag5", "tag6"]
    },
    {
      id: 4,
      image: "../../assets/images/WebDevLogo.png",
      title: "book 4",
      description: "Description of book 4",
      creator: "Creator 4",
      type: "Text",
      tags: ["tag7", "tag8"]
    },
    {
      id: 5,
      image: "../../assets/images/WebDevLogo.png",
      title: "book 5",
      description: "Description of book 5",
      creator: "Creator 5",
      type: "Image",
      tags: ["tag9", "tag10"]
    },
    {
      id: 6,
      image: "../../assets/images/WebDevLogo.png",
      title: "book 6",
      description: "Description of book 6",
      creator: "Creator 6",
      type: "Video",
      tags: ["tag11", "tag12"]
    }
  ];
}
