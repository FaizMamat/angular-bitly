import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const postUrl = 'https://tranquil-caverns-37372.herokuapp.com/urls';
const ListURL = 'https://tranquil-caverns-37372.herokuapp.com/urls';

@Injectable({
  providedIn: 'root'
})
export class URLService {

  constructor(private http: HttpClient) { }

  urlInfo(long) {
    const params = {
      longUrl: long
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(`${postUrl}`, params, httpOptions );

  }

  shortUrl(id) {
    return this.http.get(`${ListURL}/${id}`);
  }

}