import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router}  from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  currentUrl:string ;
  constructor(private router :Router)
  {

  }
  canActivate( 
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


       
       this.currentUrl =  route.url[0].path;
          if (this.currentUrl.length>0)
          {

            if(this.currentUrl=='viewAllFood' || this.currentUrl=='addCategory' 
            ||  this.currentUrl=='addFood'  ||  this.currentUrl=='changePassword' 
            || this.currentUrl=='home' || this.currentUrl=='pay' 
            ||  this.currentUrl=='order'  ||  this.currentUrl=='orderDetails' )
            {
                if(sessionStorage.getItem("userName") == null)
                {  
                  alert("First Login");
                   this.router.navigate(['login']);
                  return false;
                }
                else return true;
            }
          }
         
          return true;


  }
  
}
