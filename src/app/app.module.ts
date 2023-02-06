import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAplicationComponent } from './main-aplication/main-aplication.component';
import { NavbarComponent } from './main-aplication/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentacionComponent } from './main-aplication/presentacion/presentacion.component';
import { AboutmeComponent } from './main-aplication/aboutme/aboutme.component';
import { ProyectosComponent } from './main-aplication/proyectos/proyectos.component';
import { SkillsComponent } from './main-aplication/skills/skills.component';
import { ContactoComponent } from './main-aplication/contacto/contacto.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './main-aplication/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainAplicationComponent,
    NavbarComponent,
    PresentacionComponent,
    AboutmeComponent,
    ProyectosComponent,
    SkillsComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
