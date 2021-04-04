import { Component, OnInit } from '@angular/core';

var signLib=["again", "also", "ask", "because", "boy", "but", "can", "come", "deaf", "different",
"done", "drink", "drive", "eat", "email_address", "family", "father", "few", "good", "have",
"he", "hearing", "hello", "help", "home", "how", "if", "internet", "know", "remember",
"same", "say", "school", "see", "she", "should", "signing", "slow", "some", "sorry",
"take", "tell", "texting", "that", "their", "they", "think", "time", "tired", "toilet",
"understand", "use", "wait", "water", "what", "when", "where", "which", "who", "why",
"with", "woman", "work", "write", "yes", "you", "your", "fine", "fingerspell", "food", 
"for", "friend", "get", "girl", "give"]

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
