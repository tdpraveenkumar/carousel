import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  images = [
    { path: 'https://source.unsplash.com/800x600/?nature' },
    { path: 'https://source.unsplash.com/800x600/?car' },
    { path: 'https://source.unsplash.com/800x600/?moto' },
    { path: 'https://source.unsplash.com/800x600/?fantasy' },
    { path: 'https://source.unsplash.com/800x600/?nature' },
    { path: 'https://source.unsplash.com/800x600/?car' },
    { path: 'https://source.unsplash.com/800x600/?moto' },
    { path: 'https://source.unsplash.com/800x600/?fantasy' },
  ];
}
