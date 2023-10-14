import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private api:ApiService, private http:HttpClient, private cookieService: CookieService, private router:Router){ }
  username:any;
  accountnumber:any;
  isAuthenticated:any;
  alldata:any;
  logout(data:any){
    const jsondata = JSON.parse(data);
    jsondata.what =false;
    this.http.post(`${this.api.apiUrl}api/changeLogIn`, jsondata).subscribe();
  }
  validate(data:any){
    this.http.post(`${this.api.apiUrl}api/validate`, data).subscribe((response)=>{
      if(response){
        //To make isLoggedIn true in database
         this.http.post(`${this.api.apiUrl}api/changeLogIn/`, { username: data.username, accountnumber: data.accountnumber, what: true }).subscribe();
         this.username = data.username;
         this.accountnumber = data.accountnumber;
         this.isAuthenticated = true;
         const userData = {
          username:this.username,
          accountnumber:this.accountnumber
         }
         this.cookieService.set('userData', JSON.stringify(userData));
         this.router.navigate(["/details"])
      }
    });

  }
  
}
