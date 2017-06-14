import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  title= 'Angular 2 Crud operation with an Array';
    empleados = [

        ];
 model1:any={};
 model2:any={};
 msg:any={};



 //variables:


 addEmpleado(){
     this.empleados.push(this.model1);
     this.model1={};
     this.msg="Empleado Aggiunto";
}

borrarEmpleado(i) {
  this.empleados.splice(i,1)
  console.log(i);
  this.msg="Empleado Cancellato"

}
myvalue;
editEmpleado(k){
  this.model2.name=this.empleados[k].name;
  this.model2.apellido=this.empleados[k].apellido;
  this.model2.contrasena=this.empleados[k].contrasena;
  this.myvalue=k;
}


updateEmpleado(){
  let k = this.myvalue;
  for (let i=0; i<this.empleados.length; i++){
    if (i==k) {
      this.empleados[i]=this.model2;
      this.model2={};
      this.msg="Empleado Update"
    }
  }

}

clickMe(){
  this.msg="";
}
}
