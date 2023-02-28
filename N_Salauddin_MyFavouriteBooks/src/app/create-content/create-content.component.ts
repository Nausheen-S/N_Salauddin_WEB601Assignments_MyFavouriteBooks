import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})

export class CreateContentComponent {
  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    image: '',
    type: '',
    tags: []
  };
  @Output() addContent = new EventEmitter<Content>();

  onSubmit() {
    // this.addContent.emit({...this.newContent, tags: this.newContent.tags.split(',').map(tag => tag.trim())});
    this.addContent.emit({...this.newContent});
    this.newContent = {
      id: 0,
      title: '',
      description: '',
      creator: '',
      image: '',
      type: '',
      tags: []
    };
  }
}
