import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  private apiUrl = "https://jsonplaceholder.org/users";

  constructor(private httpclient: HttpClient) {
  }

  fetchDataFromApi() {
    return this.httpclient.get(this.apiUrl);
  }
}
