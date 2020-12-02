import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-asl',
  templateUrl: './asl.component.html',
  styleUrls: ['./asl.component.css']
})
export class ASLComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  translate() {
    
    const headers = new HttpHeaders();
    this.http.get('http://localhost:3000/', {headers: headers}).subscribe(
      (res: string) => {
        let tranlatedSign = JSON.parse(res)
        document.getElementById("translation").innerHTML = tranlatedSign
      }
    )
    
  }
}
