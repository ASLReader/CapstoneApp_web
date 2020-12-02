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
        let signs = res["signs"][0]
        let sign;
        let history = ""
        for (sign of signs) {
          document.getElementById("translation").innerHTML = sign["sign"]
          history = history + ", " + sign["sign"]
        }
        document.getElementById("history").innerHTML = history
      }
    )
    
  }
}
