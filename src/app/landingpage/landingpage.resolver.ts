import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { UserService } from '../core/user.service';
import { FirebaseUserModel } from '../core/user.model';

@Injectable()
export class LandingPageResolver implements Resolve<any> {

  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) : Promise<any> {

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(res => {
        /*if(res.providerData[0].providerId == 'password'){
          user.image = 'https://via.placeholder.com/400x300';
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }
        else{
          user.image = res.photoURL;
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;*/
          return resolve(true);
        // }
      }, err => {
        this.router.navigate(['/login']);
        return reject(err);
      });
    });
  }
}
