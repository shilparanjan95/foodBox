import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Food } from '../food';
import { Category } from '../category';
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private apiService :ApiServiceService,
   private router:Router) { }
  food:Food;
  category:Category;
  categories:Category[];
  categoryIds:number;
  ngOnInit(): void {
   this.loadCategoryList();
  // alert("cata "+this.categories );
  }

  loadCategoryList()
  {

    
    this.apiService.getCategory().subscribe(
     data => {
      this.categories = data;
      // alert("data "+data);
      }
    );
   // alert("later "+this.categories );
  }

  foodForm = this.formBuilder.group(
    {
      foodName: this.formBuilder.control('',Validators.required),
      foodCategory: this.formBuilder.control('',Validators.required),
      foodPrice: this.formBuilder.control('',Validators.required),
      categoryName: this.formBuilder.control('',Validators.required)
      
    }
  )

  saveFood()
  {


    for(let c =0;c<this.categories.length;c++)
    {
       if(this.categories[c].categoryName==this.foodForm.value.categoryName)
       {
        this.categoryIds = this.categories[c].categoryId;
       }
    }
    alert(this.foodForm.value.foodName+ " saved to app! ");
   this.category = new Category(this.categoryIds,this.foodForm.value.categoryName);
   this.food = new Food(this.foodForm.value.foodName,this.foodForm.value.foodCategory,this.foodForm.value.foodPrice,this.category);
  this.apiService.saveFood(this.food).subscribe(
    data=> {
      
    }
  );
  this.foodForm.reset();
  this.router.navigate(['viewAllFood']);
  }

}
