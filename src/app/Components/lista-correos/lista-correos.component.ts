import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.scss']
})
export class ListaCorreosComponent implements OnInit {

  correos: any[];

  constructor() { 
    const correo1 = {
      titulo: "Titulo 1",
      cuerpo: "Cuerpo 1",
      emisor: "emisor1@blabla.es",
      destinatario: "destinatario1@blabla.es",
      leido: true
    };

    const correo2 = {
      titulo: "Titulo 2",
      cuerpo: "Cuerpo 2",
      emisor: "emisor2@blabla.es",
      destinatario: "destinatario2@blabla.es",
      leido: false
    };

    this.correos = [];
    this.correos.push(correo1);
    this.correos.push(correo2);
  }

  ngOnInit(): void {
  }

}
