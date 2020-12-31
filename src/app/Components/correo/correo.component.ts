import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() {
    this.correo = {
      titulo: "Título del email",
      cuerpo: "cuerpoblabalcuerpoblabalcuerpoblabalcuerpoblabalcuerpoblabalcuerpoblabalcuerpoblabal",
      emisor: "amisor@@blabala.bla",
      destinatario: "Destinatario@blabla.bla"
    }
  }

  ngOnInit(): void {
  }

}
