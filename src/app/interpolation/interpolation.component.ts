import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  actor = {
    apellidos: 'De Niro',
    nombre: 'Robert',
    fechaNac: new Date(1943, 7, 17)
  }

  constructor() { }

  ngOnInit(): void {
  }

  getEdad(): number {
    let edad: number = (new Date().getTime() - this.actor.fechaNac.getTime()) / (365 * 24 * 60 * 60 * 1000);
    return Math.ceil(edad);
  }

}
