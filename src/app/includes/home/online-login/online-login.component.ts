import { Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-login',
  templateUrl: './online-login.component.html',
  styleUrls: ['./online-login.component.css']
})
export class OnlineLoginComponent {
  apiUrl:any;
  failed:any;
  constructor(private http: HttpClient, api: ApiService, private fb:FormBuilder,private router: Router) { 
    this.apiUrl = api.getApiUrl();
    this.form  = this.fb.group({
        username:['', Validators.required]
    });
  };
  form = new FormGroup({
    username:new FormControl()
  });
  submitForm():void{
    this.http.post(`${this.apiUrl}api/userexist/`, this.form.value).subscribe((response)=>{
      if(response===true){
        this.router.navigate(['/login'], {queryParams:this.form.value});
      }else{
        this.failed = true;
      }
    });
  } 
}