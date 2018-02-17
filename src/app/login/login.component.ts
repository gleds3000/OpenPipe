import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import {UserService} from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    // private router: Router,
    // private user: UserService
  ) { }

  ngOnInit() {
    console.log('hit');
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e);
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    if (username === 'admin' && password === 'admin') {
      console.log(username);
      // this.user.setUserLoggedIn();
      // this.router.navigate(['dashboard']);
    }
  }
}
