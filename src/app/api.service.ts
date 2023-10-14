import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:String = "http://localhost:5000/";
  constructor() { }
  getApiUrl(){
    return this.apiUrl;
  }
}
