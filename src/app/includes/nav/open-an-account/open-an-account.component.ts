import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-open-an-account',
  templateUrl: './open-an-account.component.html',
  styleUrls: ['./open-an-account.component.css']
})
export class OpenAnAccountComponent {
  constructor(private formBuilder: FormBuilder) {
    this.formDetails = this.formBuilder.group({
      name: new FormControl(
        '',
        Validators.required
      ),
      // contact: new FormControl(
      //   '',
      //   Validators.required
      // ),
      email: new FormControl(
        '',
        [Validators.email, Validators.required]
      ),
      // age: new FormControl(
      //   '',
      //   [Validators.required, Validators.minLength(5), Validators.maxLength(100)]
      // ),
      // qualification: new FormControl(
      //   '',
      //   Validators.required  
      // )
    });
  }
  formDetails:any;
  submit(){
    console.log(this.formDetails.value)
  }
}
