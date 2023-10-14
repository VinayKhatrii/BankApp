import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  websiteUrl = window.location.origin;
  socialLinks =[
    {appName: "facebook", appLink:"#", appclass:"fa fa-facebook"},
    {appName: "instagram", appLink:"#", appclass:"fa fa-instagram"},
    {appName: "twitter", appLink:"#", appclass:"fa fa-twitter"},
    {appName: "google", appLink:"#", appclass:"fa fa-google"},
  ]
  
}
