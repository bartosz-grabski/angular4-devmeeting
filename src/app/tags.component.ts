import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tags',
  template: `
    <ul>
      <li *ngFor="let tag of tags">{{tag}}</li>
    </ul>
  `


})
export class TagsComponent {
  @Input() public tags: string[];
}
