import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-bank-admin',
  templateUrl: './bank-admin.component.html',
  styleUrls: ['./bank-admin.component.css']
})
export class BankAdminComponent {
  constructor(
    private cookie: CookieService,
    private http: HttpClient,
    private api: ApiService,
    private router: Router
  ){}
  verified:Boolean = false;
  apiUrl = this.api.apiUrl;

  data ={
    username: "",
    password: ""
  }
  error_msg = ""
  adminSubmit(){
    this.http.post(`${this.apiUrl}api/admin/`,this.data).subscribe((response:any)=>{
      if(response.username==this.data.username){
        this.verified = response.isVerified;
        if(this.verified){
          this.cookie.set("admin-info", JSON.stringify(this.data));
          this.router.navigate(["/admin"]);
        }else{
          this.error_msg =  "Login details are incorrect."
        }
      }
    })
  }
}
