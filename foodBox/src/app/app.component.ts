import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements DoCheck{
 
  constructor(private router:Router)
  {

  }
  title = 'kitchenStory';


  isAdmin = false;
  isUser = false;
  isHome = false;

  ngDoCheck(): void {
    if(this.router.url=="/")
    { 
      this.isHome = true;
      this.isAdmin = false;
      this.isUser = false;
    }
    else if(this.router.url=="/login" || this.router.url=="/register" ||  this.router.url=="/changePassword")
    {
      this.isHome = false;
    }
   else if(this.router.url=="/viewAllFood" )
    {
      this.isHome = false;
      this.isUser = false;
      this.isAdmin = true;
    }
    else if(this.router.url=="/home" )
    { this.isHome = false;
      this.isUser = true;
      this.isAdmin = false;
    }
    console.log(" user"+this.isUser);
    console.log(" admin"+this.isAdmin);
    console.log("home flag"+this.isHome)
    }

   
  }


  

