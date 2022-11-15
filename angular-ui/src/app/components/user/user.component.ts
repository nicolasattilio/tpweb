import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() public display:any;
  @Input() userId:any;

  public userForm=new FormGroup({
    'id':new FormControl([]),
    'nombre':new FormControl([]),
    'apellido':new FormControl([]),
    'mail':new FormControl([]),
    'pass':new FormControl([]),
    'edad':new FormControl([]),
    'rol':new FormControl([]),
  })

  constructor(
    private userService:UserService,
  ) { }

  ngOnInit(): void {
    if(this.display=='editUser'){
      if(this.userId){
        this.userService.getUser(this.userId).subscribe((data:any)=>{
          if(data){   
            this.userForm.get('id')?.setValue(data.id);
            this.userForm.get('nombre')?.setValue(data.nombre);
            this.userForm.get('apellido')?.setValue(data.apellido);
            this.userForm.get('mail')?.setValue(data.mail);
            this.userForm.get('pass')?.setValue(data.pass);
            this.userForm.get('edad')?.setValue(data.edad);
            this.userForm.get('rol')?.setValue(data.rol);
          }else{
            console.log("No se puede visualizar la bebida");
          }
        },error=>{
          console.log("No se puede visualizar la bebida");
        });
      }
    }
  }

  onSubmit(){
    var contUsers;
    this.userService.getUsers().subscribe((data:any)=>{
      if(data){
        contUsers=data.length+1;
        this.userForm.get('id')?.setValue(contUsers);
        this.userService.postUser(JSON.stringify(this.userForm.value));
      }else{
        console.log("No se pudo guardar el usuario");
      }
    })
    this.display='Home';
  }

  onSubmitEdit(){
    let userIdEdit=this.userForm.get('id')?.value;
    this.userService.putUser(JSON.stringify(this.userForm.value),userIdEdit);
    this.display='Home';
  }

}
