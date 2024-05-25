import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  disabled:boolean=false;
  color:string="red";
  imagen: string="imagen1.jpg";
  ancho :number=100;
  largo:number=100;
  constructor() { }

  ngOnInit(): void {
  }

  changeImage(){
    this.imagen = "imagen2.jpeg";
    this.ancho=400;
    this.largo=500;
  }

}
