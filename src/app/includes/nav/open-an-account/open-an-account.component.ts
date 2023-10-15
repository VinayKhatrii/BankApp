import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-open-an-account',
  templateUrl: './open-an-account.component.html',
  styleUrls: ['./open-an-account.component.css']
})
export class OpenAnAccountComponent {
  error:boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private api: ApiService
    ) {
    this.formDetails = this.formBuilder.group({
      name: new FormControl(
        '',
        Validators.required
      ),
      contact: new FormControl(
        '',
        Validators.required
      ),  
      email: new FormControl(
        '',
        [Validators.email, Validators.required]
      ),
      age: new FormControl(
        '',
        [Validators.required, Validators.min(5), Validators.max(100)]
      ),
      qualification: new FormControl(
        '',
        Validators.required  
      )
    });
  }
  formDetails:any;
  decide:boolean = false;
  submit(){
   if (this.formDetails.valid){
    this.error = false;
    this.http.post(`${this.api.apiUrl}api/user/new`, this.formDetails.value).subscribe(
      (res:any) => {
        if(res.success == true){
          this.formDetails.reset();
          this.decide = true;
        }else{
          this.decide = false;
          alert("There is some problem.\nPlease try again later")
        }
      }
    )
   }else{
    this.error = true;
   }
  }
}
