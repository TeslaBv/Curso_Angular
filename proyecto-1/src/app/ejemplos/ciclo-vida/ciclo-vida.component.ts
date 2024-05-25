import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit {
  texto:string="Texto default";




  constructor() {
    //Se ejecuta al inicio de la clase
    console.log("ejecucion desde el method costructor");
    
   }

  ngOnInit(): void {
    console.log("ejecucion desde methos onInit");
    
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("Se ejecuta el DoCheck");
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    alert("chao");
    
  }

  cambiarTexto(){
    this.texto="otro valor con ñandu";
    console.log("ejecucion den el ngDoChek cambiando el texto")
  }

}
