import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModifierUnEtudiantComponent } from './modifier-un-etudiant/modifier-un-etudiant.component';
import { ConsulterLesEtudiantComponent } from './consulter-les-etudiant/consulter-les-etudiant.component';
import { ConsulterUnEtudiantComponent } from './consulter-un-etudiant/consulter-un-etudiant.component';
import { RecherchePrenomNomCinComponent } from './recherche-prenom-nom-cin/recherche-prenom-nom-cin.component';
import { SupprimerUnEtudiantComponent } from './supprimer-un-etudiant/supprimer-un-etudiant.component';
import { AjouterUnEtudiantComponent } from './ajouter-un-etudiant/ajouter-un-etudiant.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ModifierUnEtudiantComponent,
    ConsulterLesEtudiantComponent,
    ConsulterUnEtudiantComponent,
    RecherchePrenomNomCinComponent,
    SupprimerUnEtudiantComponent,
    AjouterUnEtudiantComponent
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
