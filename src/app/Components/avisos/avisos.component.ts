import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent implements OnInit {

  mensaje: string;
  visible: boolean;

  constructor() { 

    this.mensaje = "Correo enviado";
    this.visible = false;

  }

  ngOnInit(): void {
    this.mostrarMensaje('Correo enviado.');
  }

  mostrarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    this.visible = true;
    this.esperarParaOcultarMensaje();
  }

  ocultarMensaje() {
    this.visible = false;
    this.mensaje = '';
  }

  esperarParaOcultarMensaje() {
    setTimeout(()=> {
      this.ocultarMensaje();
    }, 2000);
  }
}
