import { compileComponentFromMetadata } from "@angular/compiler";
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from '@angular/core';
import { combineLatestInit } from "rxjs/internal/observable/combineLatest";

@Component ({
    selector: 'app-contador',
    template: `

        <h1> {{ title }} </h1>

        <h3>La base es: <strong> 5 </strong> </h3>
            
        <button (click)=" acumular (-base) " > -1 </button>

        <samp> {{ numero}} </samp>

        <button (click)=" acumular (base) " > +1 </button>  
        
    `
})


export class ContadorComponent {

    public title : string = 'Contador App';
    public numero: number = 10;
    public base  : number = 5;

    acumular ( valor: number) {
    this.numero += valor;
  }

}

