import { User } from './models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tdf';
  Courses = ['Angular', 'React', 'vue'];

  userModel = new User(
    'Sagor',
    'sagor@gmail.com',
    '01828367733',
    'angular',
    'morning',
    true
  );
}
