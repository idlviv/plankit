import { Component, OnInit } from '@angular/core';
import { slides } from '../components/data';
import { Slides } from '../components/slides';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slide: Slides;
  slides: any;


  constructor() {
    this.slides = slides;
  }

  ngOnInit() {
    this.slide = slides[0];
  }

  choose(slide) {
    this.slide = slide;
  }
}
