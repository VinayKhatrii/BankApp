import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-changeuserdetails',
  templateUrl: './changeuserdetails.component.html',
  styleUrls: ['./changeuserdetails.component.css']
})
export class ChangeuserdetailsComponent {
  changeDetailsForm: FormGroup;
  constructor(
    private http: HttpClient,
    private api: ApiService,
    private formBuilder: FormBuilder
  ){
    this.changeDetailsForm = this.formBuilder.group({
      username: ['', Validators.required],
      toChange: ['name', Validators.required],
      newValue: ["", Validators.required]
    })

  }
  
  apiUrl = this.api.apiUrl;
  details = ["name", "surname","dob","accbalance","currency", "loanamt","howmanyloan","country","city","state","fulladdress","telephone","mobile","timezone","qualification","minor"];
  username = "";
  
  inputType = "";
  result:any;
  setInputType() {
    var input=this.changeDetailsForm.value.toChange;
    if (["accbalance","loanamt", "howmanyloan"].includes(input))  {
      this.inputType = "number";
    } else if (input === "dob") {
      this.inputType = "date";
    }  else if (["country", "city", "state", "fulladdress", "name", "surname", "timezone", "qualification"].includes(input)) {
      this.inputType = "text";
    } else if (["telephone", "mobile"].includes(input)) {
      this.inputType = "tel";
    } else if (input === "minor") {
      this.inputType = "checkbox";
    } else {
      this.inputType = "unknown";
    }
  }

  submit(){ 
    this.http.post(`${this.apiUrl}api/admin/changeDetails/`, this.changeDetailsForm.value ).subscribe((response:any)=>{
      alert(JSON.stringify(response));
    })
  }
}

