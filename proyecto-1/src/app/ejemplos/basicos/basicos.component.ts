import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  nombre : string ="Hiram Axd";
  correo : string = "cruzfabianhiram@gmail.com"
  edad : number = 21;
  fecha = new Date(); 
  html:string =`<strong>Texto desde html</strong>`
  paises : Array<any>;
  constructor() { 
    this.paises=[
      {nombre:"Mexico",
        acr:"MX"
      }
    ]
  }

  ngOnInit(): void {
  }

}
