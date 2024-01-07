import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UlvisService {
  ulvisBaseUrl: string = 'https://ulvis.net/api.php?url=';
  websiteUrl: string = 'https://tesodev.ilkerserce.com';
  customUrl: string = 'tesodev';

  constructor(private httpClient: HttpClient) { }

  ulvisMinifyUrl() {
    //https://ulvis.net/api.php?url=YOUR-LONG-URL&custom=YOUR-CUSTOM-NAME&private=1
    const url = `${this.ulvisBaseUrl}${this.websiteUrl}&custom=${this.customUrl}&private=1`;
    console.log(url);
    this.httpClient.get(url).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
