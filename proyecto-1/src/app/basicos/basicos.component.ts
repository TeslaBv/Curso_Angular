import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombre: string="Este es un nombre"; 
  edad : number=19;
  numero : number=12;
  fecha=new Date();
  paises:Array<any>;

  cantidad:number=123456;
  texto:string="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ex praesentium aliquid voluptate? Eius doloremque saepe dolor cupiditate et nostrum quasi dignissimos autem quo temporibus cum, quae odit sapiente aperiam?;"
  

  constructor() {
    this.paises=[
      {
        nombre:'Mexico',
        dominio:'mx'
      },
      {
        nombre:'Estados Unidos',
        dominio:'EU'
      },
      {
        nombre:'Mexico',
        dominio:'mx'
      },
      {
        nombre:'Estados Unidos',
        dominio:'EU'
      },
      {
        nombre:'Mexico',
        dominio:'mx'
      },
      {
        nombre:'Estados Unidos',
        dominio:'EU'
      },
    ]
   }

  ngOnInit(): void {
  }

}
