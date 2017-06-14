import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public i:number=1;
  public  hora:number = 0;
  public minuto:number = 0;
  public segundos:number = 0;
  public horaLapso:number;
  public minutoLapso:number;
  public segundoLapso:number;
  public colecction:Array<any> = [];
  public contador:any;
   
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

       

  start() {
    if(this.contador ==undefined){
      this.contador= setInterval( ()=>{
        this.segundos +=1;
        if (this.segundos==60){
             this.segundos=0;
          this.minuto+=1;
        }if (this.minuto==60){
              this.minuto=0;
              this.hora+=1;
        } if (this.hora==24){
              this.hora=0;
        } 
      }
      ,100);
    }
  }

  lapso() {
    let obj:any = [];
    obj.numero= this.i++;
    obj.hora= this.hora;
    obj.minuto=this.minuto;
    obj.segundos=this.segundos;
    
    this.colecction.push(obj);

  }

  stop() {
    clearInterval(this.contador);
    this.hora=0;
    this.minuto=0;
    this.segundos=0;
    this.contador=null;
   
  }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

  
}



