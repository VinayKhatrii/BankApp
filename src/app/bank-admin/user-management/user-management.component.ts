import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  constructor(
    private cookie: CookieService,
    private http: HttpClient,
    private api: ApiService,
    private router: Router
  ){}
  verified:Boolean = false;
  apiUrl = this.api.apiUrl;
  ngOnInit(){
    const adminData = this.cookie.get("admin-info");
    if(!adminData){
      this.router.navigate(["/admin-login"]);
    }
    this.http.post(`${this.apiUrl}api/admin`, adminData).subscribe((response:any)=>{
      if(!response.isVerified){
       this.router.navigate(["/"])
      }else if (response.isVerified){
        this.verified = true;
      }
    });
    document.getElementById(this.decideComponent.toString())?.classList.add("active");
  }

  decideComponent:String = "add-user";
  decide(value:String){
    this.decideComponent = value;
    var divs = document.querySelectorAll(".user-management ul li div");
    for(var i=0; i<divs.length; i++){
      if (divs[i].classList.contains("active")){
        divs[i].classList.remove("active");
      }
    }
    document.getElementById(value.toString())?.classList.add("active");
  }
}
