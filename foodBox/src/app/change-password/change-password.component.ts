import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ApiServiceService } from '../api-service.service';
import {FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private service : ApiServiceService, private builder : FormBuilder,private router:Router) { }
   user:Customer;
   newUser :Customer;
  ngOnInit(): void {
    this.service.getUserById(sessionStorage.getItem("userId")).subscribe(
      data =>{
        this.user = data;
      }
    )
  }
  pwdForm = this.builder.group
  ({
   password: this.builder.control('',Validators.required)
}
  )

  setPassword( cust: Customer, pwd:string) : void
  {
      cust.password = pwd;
      
  }
  savePassword()
  { 
    this.setPassword(this.user,this.pwdForm.value.password);
    this.service.saveUser(this.user).subscribe(
      data =>{
        alert("Password Changed!");
      }
    )
     this.router.navigate(['login'] ); 
  }
}
