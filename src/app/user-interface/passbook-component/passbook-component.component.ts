import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-passbook-component',
  templateUrl: './passbook-component.component.html',
  styleUrls: ['./passbook-component.component.css']
})
export class PassbookComponentComponent {

 constructor(
  private http: HttpClient,
  private api: ApiService,
  private cookie: CookieService,
  private router: Router
 ){ 
  
 }
 cookieData:any;
 userData: any;
 passbookDetails:any;

 async ngOnInit(){
  this.cookieData = this.cookie.get("userData");
  if(!this.cookieData){
    this.router.navigate(["/login"]);
  }
  await this.getUserData(this.cookieData);
  await this.getPassbookDetails(this.userData);
 }
 
 async getUserData(cookieData:any){
  const userData =  await firstValueFrom(
    this.http.post(`${this.api.apiUrl}api/getUserData`, JSON.parse(cookieData))
  );
  this.userData = userData;
 }
 async getPassbookDetails(userData:any){
  const passbookDetails =  await firstValueFrom(
    this.http.post(`${this.api.apiUrl}api/user/passbookDetails/`, {accountnumber : userData.accountnumber})
  );
  this.passbookDetails = passbookDetails;
}
parseTransactionData(jsonString:any): any[] {
  try {
    try{
      return JSON.parse(jsonString);
    }catch{
      return jsonString;
    }
    
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return [];
  }
}

}
