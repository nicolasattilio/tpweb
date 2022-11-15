import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from 'src/app/service/drink.service';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {
  @Input() display:any;
  @Input() drinkId:any;

  public drink:any;
  

  public drinkForm=new FormGroup({
    'id':new FormControl([]),
    'nombre':new FormControl([]),
    'tipo':new FormControl([]),
    'tamano':new FormControl([]),
    'origen':new FormControl([]),
  })

  constructor(
    private drinkService:DrinkService,
  ) { }

  ngOnInit(): void {
    if(this.display=='editDrink'){
      if(this.drinkId){
        this.drinkService.getDrink(this.drinkId).subscribe((data:any)=>{
          if(data){   
            this.drinkForm.get('id')?.setValue(data.id);
            this.drinkForm.get('nombre')?.setValue(data.nombre);
            this.drinkForm.get('tipo')?.setValue(data.tipo);
            this.drinkForm.get('tamano')?.setValue(data.tamano);
            this.drinkForm.get('origen')?.setValue(data.origen);          
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
    var contDrinks;
    this.drinkService.getDrinks().subscribe((data:any)=>{
      if(data){  
        contDrinks=data.length+1;
        this.drinkForm.get('id')?.setValue(contDrinks);
        this.drinkService.postDrink(JSON.stringify(this.drinkForm.value));
      }else{
        console.log("No se pudo guardar la bebida");
      }
    });
    this.display='drinks';
  }

  onSubmitEdit(){
    let drinkIdEdit=this.drinkForm.get('id')?.value;
    this.drinkService.putDrink(JSON.stringify(this.drinkForm.value),drinkIdEdit);
    this.display='drinks';
  }
}
