import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  testComp = "Settings";
  ngOnInit(): void {
  }

  accuracyHandler() {
    document.getElementById("accuracyRange");
  }

}
