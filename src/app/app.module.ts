import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CorreoComponent } from './Components/correo/correo.component';
import { ListaCorreosComponent } from './Components/lista-correos/lista-correos.component';
import { NuevoCorreoComponent } from './Components/nuevo-correo/nuevo-correo.component';
import { RouterModule } from '@angular/router';
import { CorreosRecibidosComponent } from './Views/correos-recibidos/correos-recibidos.component';
import { AvisosComponent } from './Components/avisos/avisos.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreosComponent,
    NuevoCorreoComponent,
    CorreosRecibidosComponent,
    AvisosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]) // Para arreglar el Cannot GET y ERROR: No provider for ChildrenOutletContexts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
