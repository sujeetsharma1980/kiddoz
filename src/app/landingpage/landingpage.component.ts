import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Location } from '@angular/common';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor( public authService: AuthService, private location : Location, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      //this.location.back();
      this.router.navigate(['/']);
    }, (error) => {
      console.log("Logout error", error);
    });
  }

}
