import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-access-contact-forms',
  templateUrl: './access-contact-forms.component.html',
  styleUrls: ['./access-contact-forms.component.css']
})
export class AccessContactFormsComponent {
  constructor(
    private http:HttpClient,
    private api: ApiService
  ){}
  contact_form_details:any = []
  accountnumber = 202302;
  ngOnInit(){
      this.http.post(`${this.api.apiUrl}api/contactDetails`, {}).subscribe(
        (response:any) => {
          if(response.success){
            this.contact_form_details = response.details;
            console.log(this.contact_form_details );
          }
        }
      )
  }
}