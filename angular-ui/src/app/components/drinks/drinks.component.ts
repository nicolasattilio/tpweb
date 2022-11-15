import { Component, Input, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/service/drink.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  public drinks:any;
  @Input() userLog:boolean=false;
  @Input() display:any;
  @Input() public userRol:any;
  public drinkId:any;
  public drink:any;

  constructor(
    private drinkService:DrinkService,

  ) { }

  ngOnInit() {
    this.drinks = this.drinkService.getDrinks();
  } 

  displayDrink(drinkId:any){
    this.drink=this.drinkService.getDrink(drinkId);
  }

  goToEditDrink(drink:any){
    this.drinkId=drink;
    this.display='editDrink';
  }

  goToRemoveDrink(drink:any){
    this.drinkId=drink;
    this.drinkService.deleteDrink(this.drinkId);
    this.display='drinks';
  }

}
