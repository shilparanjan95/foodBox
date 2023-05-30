import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Customer } from '../customer';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder:FormBuilder,private service :ApiServiceService,
    private router:Router) { 
      sessionStorage.clear();
    }
msg :string=null;
  customers:Customer[];
  cust:Customer;
  ngOnInit(): void {

    this.service.getUsers().subscribe
    (
      data => {
        this.customers = data;
      }
    )
    ;
  }

  loginForm =  this.builder.group(
    {
      email : this.builder.control('',Validators.email),
      password : this.builder.control('',Validators.required)
    }
  );
  name :string
  login() 
  {

    this.cust = this.service.checkLogin(this.customers,this.loginForm.value.email,this.loginForm.value.password);

     if(this.cust!=null)
     {
       sessionStorage.setItem("userName",this.cust.name);
       sessionStorage.setItem("userId",this.cust.customerId+"");
       //alert("logged in ");

       if(this.cust.name=="admin")
       {
        this.router.navigate(['viewAllFood']);
        
       }
       else 
       {
        this.router.navigate(['home']);
       }
      
     }
     else{
      alert("Invalid Details !");
      this.msg="Please enter valid details to login in";
     }
  }

 

}
