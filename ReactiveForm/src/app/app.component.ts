import { Component } from '@angular/core';
import{FormGroup, FormControl}  from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    UserName: new FormControl ('sagor'),
    password: new FormControl("123"),
    confirmPassword: new FormControl ("123")

  })

   loadApi() {
    this.registrationForm.patchValue({
      UserName :"tusher",
      password: "234",
      confirmPassword: "234"
    })
  }
}
