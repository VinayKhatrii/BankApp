import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent {
  constructor(
    private http: HttpClient,
    private api: ApiService
  ){}
  inputType:'text' | 'password' = 'password';
  changeType(){
    (this.inputType == 'text') ? (this.inputType = 'password') : (this.inputType = 'text');
  }
  retypepassword='';
  formValues = {
    username: '',
    password: ''
  };
  
  adminSubmit(){
    if(this.formValues.username.trim() != "" || this.formValues.password.trim() != ""){
      this.http.post(`${this.api.apiUrl}api/admin/add/`, this.formValues).subscribe(
        (response:any) => {
          if(response.success){
            alert("User Added Successfully.")
          }else{
            alert("There is some error, please try again later.")
          }
        }
      )
    }else{
      return;
    }
  }
}
