import { Component, Input, OnInit } from '@angular/core';
import { DrinkService } from './service/drink.service';
import { UserService } from './service/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private path:any;
  public display:any;
  public drinks:any;
  public users:any;
  public user:any;
  public userId:any;
  public userRol:any;
  public userLog:boolean=false;


  title = 'angular-ui';

  constructor(
    private drinkService:DrinkService,
    private userService:UserService,
  ){}

  ngOnInit(){
    this.path=window.location.href;
    this.display='Home';
    if(localStorage.length!=0){
      this.userId=localStorage.getItem('userId');
      this.userLog=true;
      this.userRol=localStorage.getItem('userRol');
    }
  }
  goToPerfiles(){
    this.display='showUser';
    this.users= this.userService.getUsers();
  }

  goToShowDrinks(){
    this.userRol=localStorage.getItem('rol');
    this.display='drinks';
  }
  goToLogIn(){
    this.display='logIn';
  }

  statusChangedHandler(valores:any){
    this.userLog=valores.login;
    this.userRol=valores.rol;
    if(this.userLog)
      this.display='drinks';
    else
      this.display='Home';
  }

  goToHome(){
  this.display='Home';
  }
  goToAboutUs(){
    this.display='AboutUs';
  }
  goToLogOut(){
    this.userLog=false;
    localStorage.clear();
    this.display='Home';
  }

  addDrink(){
    this.display='newDrink';
  }
  editDrink(){
    this.display='editDrink';
  }
  deleteAllDrinks(){
    this.drinkService.deleteAllDrink();
  }

  
  


}


