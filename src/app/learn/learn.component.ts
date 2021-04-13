import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  signLib: any =["again", "also", "ask", "becasue", "boy", "but", "can", "come", "deaf", "different",
          "done", "drink", "drive", "eat", "email_address", "family", "father", "few", "good", "have",
          "he", "hearing", "hello", "help", "home", "how", "if", "internet", "know", "remember",
          "same", "say", "school", "see", "she", "should", "signing", "slow", "some", "sorry",
          "take", "tell", "texting", "that", "their", "they", "think", "time", "tired", "toilet",
          "understand", "use", "wait", "water", "what", "when", "where", "which", "who", "why",
          "with", "woman", "work", "write", "yes", "you", "your", "fine", "fingerspell", "food", 
          "for", "friend", "get", "girl", "give"]

  constructor() { }

  testComp = "Learn";
  ngOnInit(): void {

  }

  changeImage() {
    var randSignNum = Math.floor(Math.random() * this.signLib.length);
    var signName=this.signLib[randSignNum];
    var imagePath=`assets/ASL/${signName}/frame.jpg`;
    (<HTMLImageElement>document.getElementById("signImg")).src = imagePath;
    (<HTMLImageElement>document.getElementById("signName")).innerHTML = signName;
  }


}
