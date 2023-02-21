import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentItems:Content[] = [
    {
      id: 1,
      image: "",
      title: "book 1",
      description: "Description of book 1",
      creator: "Creator 1",
      type: "HardBound",
      tags: ["tag1", "tag2"]
    },
    {
      id: 2,
      image: "../../assets/images/WebDevLogo.png",
      title: "book 2",
      description: "Description of book 2",
      creator: "Creator 2",
      type: "SoftBound",
      tags: ["tag3", "tag4"]
    },
    {
      id: 3,
      image: "../../assets/images/WebDevLogo.png",
      title: "book 3",
      description: "Description of book 3",
      creator: "Creator 3",
      type: "HardBound",
      tags: ["tag5", "tag6"]
    },
    {
      id: 4,
      image: "../../assets/images/WebDevLogo.png",
      title: "book 4",
      description: "Description of book 4",
      creator: "Creator 4",
      type: "HardBound",
      tags: ["tag7", "tag8"]
    },
    {
      id: 5,
      image: "../../assets/images/WebDevLogo.png",
      title: "book 5",
      description: "Description of book 5",
      creator: "Creator 5",
      type: "SoftBound",
      tags: ["tag9", "tag10"]
    },
    {
      id: 6,
      image: "../../assets/images/WebDevLogo.png",
      title: "book 6",
      description: "Description of book 6",
      creator: "Creator 6",
      tags: ["tag11", "tag12"]
    },
    {
      id: 7,
      image: "",
      title: "book 7",
      description: "Description of book 7",
      creator: "Creator 7",
      tags: ["tag11", "tag12"]
    }
  ];

  searchText : string = "";
  message: string = "";

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
