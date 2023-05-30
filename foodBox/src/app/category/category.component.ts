import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms'
import { Category } from '../category';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private builder :FormBuilder,private service:ApiServiceService) { }
  category:Category
  ngOnInit(): void {
  }

  categoryForm =  this.builder.group(
{
  categoryName: this.builder.control('',Validators.required)
}

  )
  saveCategory()
  {
    this.category = new Category(null,this.categoryForm.value.categoryName);
    alert(this.categoryForm.value.categoryName+" category added ");

    this.service.addCategory(this.category).subscribe(
      data =>{
      }
    );
    this.categoryForm.reset();
  }
 
}
