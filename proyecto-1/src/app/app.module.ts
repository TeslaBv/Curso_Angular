import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo.componente';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplos/ejemplo3/ejemplo3.component';
import {BasicosComponent} from './basicos/basicos.component';
import { FormatearFechaPipe } from './utilities/formatear-fecha.pipe';
import { FormatearNumerosPipe } from './utilities/formatear-numeros.pipe';
import { DataBindingComponent } from './ejemplos/data-binding/data-binding.component';
import { CicloVidaComponent } from './ejemplos/ciclo-vida/ciclo-vida.component';
import { ComunicacionComponent } from './ejemplos/comunicacion/comunicacion.component';
import { Comunicacion2Component } from './ejemplos/comunicacion2/comunicacion2.component';
import { HomeComponent } from './pages/home/home.component';
import { Ruta2Component } from './pages/ruta2/ruta2.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { MaterialComponent } from './pages/material/material.component'

@NgModule({
  declarations: [
    AppComponent, EjemploComponent, Ejemplo2Component, Ejemplo3Component, BasicosComponent, FormatearFechaPipe, FormatearNumerosPipe, DataBindingComponent, CicloVidaComponent, ComunicacionComponent, Comunicacion2Component, HomeComponent, Ruta2Component, FormulariosComponent, MaterialComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}