import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { URLService } from '../url.service';

@Component({
  selector: 'app-shortlink',
  templateUrl: './shortlink.component.html',
  styleUrls: ['./shortlink.component.scss']
})
export class ShortlinkComponent implements OnInit {

  urlInput = new FormControl();
  urlvalue = 'key in Url';
  constructor(private URLService: URLService) { }

  ngOnInit() {
  
  }


  onClick() {
    this.URLService.urlInfo(this.urlInput.value).subscribe(Response => {
      console.log(this.urlInput);
      console.log(Response);
      alert('Submitted Successfully');
      this.urlInput.reset();
    });
   
  }


  onClickReset() {
    this.urlInput.reset();
  }


}