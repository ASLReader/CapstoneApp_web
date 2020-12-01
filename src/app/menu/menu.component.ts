import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  /* Open when someone clicks on the span element */
  openNav() {
    document.getElementById("myNav").style.width = "40%";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

}
