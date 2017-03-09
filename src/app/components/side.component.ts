import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Slides } from './slides';

@Component({
  moduleId: module.id,
  selector: 'side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {
  name: string;
  isHidden: boolean;
  @Output() choose = new EventEmitter();
  @Input() slides: Slides[];
  selectedForZoom: number;

  constructor() {
    this.isHidden = false;
    this.name = 'Name';
  }

  onChoose(slide) {
    this.choose.emit(slide);
  }

  resize(i) {
    this.selectedForZoom = i;

  }
}
