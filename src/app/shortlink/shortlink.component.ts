import { Component, OnInit, Input } from '@angular/core';
import { FormControl} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface Data{
  shortURL: string
}
@Component({
  selector: 'app-shortlink',
  templateUrl: './shortlink.component.html',
  styleUrls: ['./shortlink.component.scss']
})
export class ShortlinkComponent implements OnInit {
@Input()
  urlEnter = new FormControl('');
  UrlShow = new FormControl('');

  constructor(private http :HttpClient) { 
 
  }

  
  ngOnInit() {
    
  }

  onClick(){
    let url = "https://tranquil-caverns-37372.herokuapp.com/urls"
    let params = {
      "longURL": this.urlEnter.value,
    }
  
    console.log(params)
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  
    this.http.post(url, params, httpOptions ).subscribe((data: Data) => {
      console.log(data.shortURL)
       this.UrlShow.setValue(data.shortURL)
    })
  }

  

  onClickReset() {
    this.urlEnter.reset();
  }
 

   
}



