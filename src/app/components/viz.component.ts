import { Component, Input} from '@angular/core';
import { Slides } from './slides';

@Component({
  moduleId: module.id,
  selector: 'viz-component',
  templateUrl: './viz.component.html',
  styleUrls: ['./viz.component.css']
})
export class VizComponent  {
  @Input() slide: Slides;

  constructor() {
  }
}

