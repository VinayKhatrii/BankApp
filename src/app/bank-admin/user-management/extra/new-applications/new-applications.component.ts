import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-applications',
  templateUrl: './new-applications.component.html',
  styleUrls: ['./new-applications.component.css']
})
export class NewApplicationsComponent {
  constructor (
    private http: HttpClient,
    private api: ApiService
  ){}
  newApplications:any;
  ngOnInit(){
    this.http.post(`${this.api.apiUrl}api/user/newApplications`, {}).subscribe(
      (response:any) =>{
        if(response.success){
          this.newApplications = response.details;
        }else{
          alert("There is some problem with new applications api.\nPlease try again later")
        }
      }
    )
  }
}
