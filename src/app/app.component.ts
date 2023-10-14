import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  websiteUrl = window.location.origin;
  pathToImages = './assets/images';
  navLinks = [
    { label: 'Home', path:'/'},  
    { label:'About Us',path: '/about-us'},
    { label: 'Open an Account', path: '/new-account' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Apply For Loan', path: '/apply-for-loan' },
  ];
  isNavVisible = false; 
  toggleNav() {
    this.isNavVisible = !this.isNavVisible;
  }
}
