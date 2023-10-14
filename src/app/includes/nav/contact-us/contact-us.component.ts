import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(
    private formBuilder:FormBuilder,
    private http: HttpClient,
    private api: ApiService
  ){
    this.contact_form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      message: ['']
    })
  }
  apiUrl = this.api.getApiUrl();
  contact_form = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    message: new FormControl()
  });

  submitContactDetails(){
    if(!this.contact_form.valid){
      document.querySelector(".contactform .error")!.innerHTML = `Please fill out all details!`;
      window.scrollTo({ top: 200, behavior: 'smooth' });
      return;
    }
    if(this.contact_form.valid){
      this.http.post(`${this.api.apiUrl}api/contactform`, this.contact_form.value).subscribe((response:any)=>{
        if(response.status_code == 200 && response.success==true){
          document.querySelector(".contactform")!.innerHTML = `<h2>Thankyou for submitting,<br>We will be contacting you soon.</h2>`;
        }else{
          document.querySelector(".contactform")!.innerHTML = `<h2>Some error, please try again later.</h2>`;
        }
      });
    }
  }
}
