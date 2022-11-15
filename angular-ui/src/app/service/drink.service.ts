import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(
    private http: HttpClient
  ) { }

  getDrinks(){
    var url = 'http://localhost:3000/drinks/'; 
    return this.http.get(url);
  }

  getDrink(drinkId:any){
    var url = 'http://localhost:3000/drinks/show/'+drinkId;
    return this.http.get(url);
  }

  putDrink(drink:any,drinkId:any){
    var putDrink= JSON.parse(drink);
    var url = 'http://localhost:3000/drinks/edit/'+drinkId;
    return this.http.put(url,putDrink).subscribe(
      data => console.log("success!", data),
      error => console.error("couldn't put because", error));
  }

  postDrink(drink:any){
    var postDrink= JSON.parse(drink);
    var url = 'http://localhost:3000/drinks/save';  
    return this.http.post(url,postDrink).subscribe(
      data => console.log("success!", data),
      error => console.error("couldn't post because", error));
  }

  deleteDrink(drinkId:any){
    var url = 'http://localhost:3000/drinks/delete/'+drinkId;
    return this.http.delete(url).subscribe(
      data => console.log("success!", data),
      error => console.error("couldn't post because", error));
    }

  deleteAllDrink(){
    var url = 'http://localhost:3000/drinks/deleteAll';
    return this.http.delete(url).subscribe(
      data => console.log("success!", data),
      error => console.error("couldn't post because", error));
    }
}
