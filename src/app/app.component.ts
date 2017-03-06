import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  p: any;

  constructor() {
    this.name = 'Angular2';
    // this.p = document.querrySelector('#bs-example-navbar-collapse-1');
  }
//   $('.navbar-collapse').on('click', function () {
//   $('.navbar-collapse').collapse('hide');
//   $a = $($(this).attr('href'));
//   $('html,body').animate({ scrollTop: $a.offset().top - 50}, 500);
//   return false;
// });
  
//   this.p.addEventListener('click', function() {
//     this.p.classlist.remove('in');
// })
  // $('#navbar-collapse').removeClass('in');
}

