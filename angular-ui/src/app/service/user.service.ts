import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loogedInStatus=JSON.parse(localStorage.getItem('loggedIn')||'false');

  constructor(
    private http:HttpClient,
  ) { }

  handleError(arg0: string, newUser: any): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any> {
    throw new Error('Error al crear un nuevo usuario.');
  }

  setLoggedIn(value:boolean,userId:any,userRol:any){
    this.loogedInStatus=value;
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userId', userId);
    localStorage.setItem('userRol',userRol);
  }

  get isLoggedIn(){ 
    return JSON.parse(localStorage.getItem('loggedIn')|| this.loogedInStatus.toString());
  }

  createNewUser(newUser:any){
    return this.http.post("http://localhost:3000/users/save",newUser);
  }
  

  getUsers(){
    return this.http.get('http://localhost:3000/users/');
  }

  getUser(userId:any){
    return this.http.get('http://localhost:3000/users/show/'+userId);
  }

  postUser(user:any){
    var postUser=JSON.parse(user);
    var url= 'http://localhost:3000/users/save';
    return this.http.post(url,postUser).subscribe(
      data => console.log("success!", data),
      error => console.error("couldn't post because", error));
  }

  putUser(user:any,userId:any){
    var putUser= JSON.parse(user);
    var url = 'http://localhost:3000/users/edit/'+userId;
    return this.http.put(url,putUser).subscribe(
      data => console.log("success!", data),
      error => console.error("couldn't put because", error));
  }

  removeUser(userId:any){
    var url= 'http://localhost:3000/users/delete/'+userId;
    return this.http.delete(url).subscribe(
      data => console.log("success!", data),
      error => console.error("couldn't post because", error));
  }

}
