import { Component} from '@angular/core';
import { slides } from './data';


@Component({
  moduleId: module.id,
  selector: 'viz',
  templateUrl: './viz.component.html',
  styleUrls: ['./viz.component.css']
})
export class VizComponent  {
  name: string;
  slides: any;
  // divClass: string;
  isHidden: boolean;

  constructor() {

    // this.divClass = 'red';
    this.isHidden = false;

    this.name = 'Name';
    this.slides = slides;
  }

  toggle(e, tab: number) {
    // console.log(e.target);

    // this.slides.forEach(function(item: any) {
    //   item.show = false;
    //   // console.log(item);
    // });
    // this.slides[tab].show = true;

    // e.target.classList.remove('.tmbn')
  }
}

