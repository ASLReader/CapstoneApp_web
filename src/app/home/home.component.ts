import { Component, OnInit } from '@angular/core';

var signLib=["fine", "fingerspell", "food", "for", "friend", "get", "girl", "give"]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  testComp = "Home";
  ngOnInit(): void {
  }

  changeImage() {
    var randSignNum = Math.floor(Math.random() * signLib.length);
    var signName=signLib[randSignNum];
    var imagePath=`assets/ASL/${signName}/frame.jpg`;
    console.log(imagePath);
    (<HTMLImageElement>document.getElementById("sign-img")).src = imagePath;
    (<HTMLImageElement>document.getElementById("sign-name")).innerHTML = signName;
  }

}
