import { Component} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent {
  constructor(
    private http: HttpClient,
    private api: ApiService,
    private cookieService: CookieService,
    private router: Router
  ){}
  userData:any;
  ngOnInit(){
    const cookieData = this.cookieService.get("userData");
    if(!cookieData){
      this.router.navigate(["/login"]);
    }else{
      this.http.post(`${this.api.apiUrl}api/getUserData`, JSON.parse(cookieData)).subscribe((userDataJson:any)=>{
        userDataJson.isLoggedIn === false ? this.userData = {isLoggedIn:false} : this.userData = userDataJson;
        if(!this.userData.isLoggedIn){
          this.router.navigate(["/login"]);
        }
      }); 
    }
  
  }

  transferForm = new FormGroup({
   fundedAccount : new FormControl("", [
    Validators.required,
   ]),
   password : new FormControl("", [
    Validators.required,
   ]),
   description : new FormControl(""),
   fromAccount: new FormControl(""),
   amount : new FormControl("", [
    Validators.required
   ])
  })
  showButton = false;
  formSubmitted = false;
  makeRealButtonAlive(){
    this.showButton = !this.showButton;
  }
  transferAmount(){
    this.showButton = !this.showButton;
    this.transferForm.value.fromAccount = this.userData.accountnumber;
    console.log(this.transferForm.value)
    this.formSubmitted = true;
    if(this.transferForm.valid){
      this.http.post(`${this.api.apiUrl}api/user/transfer/`, this.transferForm.value).subscribe((res:any)=>{
        if(res.success){
          alert("Transaction Successful");
          this.transferForm.reset() 
        }else{
          alert(`We are unable to process this request. \nError: ${res.error}`)
        }
      })
    }
  }
}
