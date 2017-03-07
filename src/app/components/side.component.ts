import { Component} from '@angular/core';
import { slides } from './data';


@Component({
  moduleId: module.id,
  selector: 'side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent  {
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


