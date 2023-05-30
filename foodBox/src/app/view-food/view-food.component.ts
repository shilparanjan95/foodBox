import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Food } from '../food';
@Component({
  selector: 'app-view-food',
  templateUrl: './view-food.component.html',
  styleUrls: ['./view-food.component.css']
})
export class ViewFoodComponent implements OnInit {

  constructor(private service :ApiServiceService) { }
 foods:Food[];
  ngOnInit(): void {
    this. loadFoodItems();
  }


  loadFoodItems()
  { 
    this.service.getFoodItems().subscribe(
      data => {this.foods = data}
    );
  }

  
deleteFood(id:number)
{    
  
   this.service.deleteFood(id).subscribe(
    data => {
  }
   );
   alert("food deleted  successully! ");
   this.loadFoodItems();

}
}
