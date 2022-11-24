import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData;
  constructor() { }

  ngOnInit() {
  }

  changeData(event) {
    var msg = event.target.value;
    
  }
  login(data) {
    console.log(JSON.stringify(data))
  }

}