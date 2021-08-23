import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterUnEtudiantComponent } from './ajouter-un-etudiant/ajouter-un-etudiant.component';
import { LesEtudiantComponent } from './les-etudiant/les-etudiant.component';
import { ModifierUnEtudiantComponent } from './modifier-un-etudiant/modifier-un-etudiant.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AjouterUnEtudiantComponent,
    LesEtudiantComponent,
    ModifierUnEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
