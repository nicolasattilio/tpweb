import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  public userId:any;
  public users:any;
  @Input() public allUsers:any;
  public mail:any;
  public password:any;
  public userRol:any;
  @Output() statusChanged:EventEmitter<any>=new EventEmitter();
  @Input() public display:any;
  
  constructor(
    private userService:UserService,
   
  ) { }

  ngOnInit(): void {
  }

  createNewUser(){
    this.display='newUser';
  }

  logIn(){
    this.userService.getUsers().subscribe((data:any)=>{
      if(data){
        this.users=data;
        for(var i=0;i<this.users.length;i++){
          if(this.users[i].mail==this.mail && this.users[i].pass==this.password){
            this.userId=this.users[i].id;
            this.userRol=this.users[i].rol;
            this.userService.setLoggedIn(true,this.userId,this.userRol);
            this.statusChanged.emit({login:true,rol:this.userRol});
            this.display='drinks';
          }
        }
      }else{
        console.log("no existen datos");
      }
    });
  }

  goToRemoveUser(userId:any){
    this.userService.removeUser(userId);
    this.display='Home';
  }

  goToEditUser(userId:any){
    this.userId=userId;
    this.display='editUser';
  }
}
