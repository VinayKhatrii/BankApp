import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder, 
    private api: ApiService, 
    private auth:AuthService,
    private router: Router
    ) {
    this.apiUrl = api.getApiUrl();
    this.login_form = this.formBuilder.group({
      accountnumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  apiUrl:any;
  
  isAuthenticated = this.auth.isAuthenticated;
  username = this.route.snapshot.queryParamMap.get('username');
  ngOnInit():void{
    if(this.username===null){
      this.router.navigate(["/"]);
    }
  }
  login_form = new FormGroup({
    accountnumber: new FormControl(),
    password:new FormControl()
  });
  login_details():void{
    const data={
      username: this.username,
      accountnumber: this.login_form.value.accountnumber,
      password: this.login_form.value.password
    }
    if(this.login_form.valid){
      this.auth.validate(data); 
      this.isAuthenticated=false;      
  }
}
}
