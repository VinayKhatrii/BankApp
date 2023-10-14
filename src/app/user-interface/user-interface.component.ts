import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http'
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent {
 constructor( private auth : AuthService, private http:HttpClient, private router: Router, private api:ApiService,private cookieService: CookieService) {}
 isAuthenticated:any;
 userData:any;
 error_message:any;
 isBalanceShowing= true;
 
 tabledetails={
  user:true,
  acc:false,
  address:false,
  logout:false,
  transfer: false,
  passbook: false
 }
 logout(){
  const cookieData = this.cookieService.get("userData");
  this.auth.logout(cookieData);
  this.cookieService.deleteAll("userData");
  this.router.navigate(["/"]);
}
  details(detail:string){
    detail === 'user' ? this.tabledetails.user = true : this.tabledetails.user = false;
    detail === 'acc' ? this.tabledetails.acc = true : this.tabledetails.acc = false;
    detail === 'address' ? this.tabledetails.address = true : this.tabledetails.address = false;
    detail === 'logout' ? this.tabledetails.logout = true : this.tabledetails.logout = false;
    detail === "transfer-money" ? this.tabledetails.transfer = true : this.tabledetails.transfer = false;
    detail === "passbook" ? this.tabledetails.passbook = true : this.tabledetails.passbook = false;
    const divs = Array.from(document.querySelectorAll(".userdata .user div"));
    for(const div of divs){
      if(div.classList.contains(detail)){
        div.classList.add("active");
      }else{
        div.classList.remove('active')
      }
    }
    if(window.innerWidth<=550) this.close();  
  } 

ngOnInit(){
  const cookieData = this.cookieService.get("userData");
  if(!cookieData){
    this.error_message = "Please login! <br>Wait we are redirecting you!";
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

close(){
  const outletElement =  document.querySelector('.outlet') as HTMLElement | null;
  if(outletElement){
    const computedStyle = window.getComputedStyle(outletElement);
    const currentDisplay = computedStyle.getPropertyValue('display');
    if (currentDisplay === 'none') {
      outletElement.style.display = 'block';
    } else {
      outletElement.style.display = 'none';
    }
  }
  
}
}