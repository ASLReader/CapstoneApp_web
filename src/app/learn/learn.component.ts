import { Component, OnInit } from '@angular/core';

var signLib=["fine", "fingerspell", "food", "for", "friend", "get", "girl", "give"]

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeImage() {
    var randSignNum = Math.floor(Math.random() * signLib.length);
    var signName=signLib[randSignNum];
    var imagePath=`assets/ASL/${signName}/frame.jpg`;
    console.log(imagePath);
    (<HTMLImageElement>document.getElementById("signImg")).src = imagePath;
    (<HTMLImageElement>document.getElementById("signName")).innerHTML = signName;
  }
}
