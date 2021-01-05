import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  mensaje: string;
  visible: boolean;

  constructor() { 

    this.mensaje = '';
    this.visible = false;

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
