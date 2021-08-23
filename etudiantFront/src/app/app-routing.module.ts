import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterUnEtudiantComponent } from './ajouter-un-etudiant/ajouter-un-etudiant.component';
import { LesEtudiantComponent } from './les-etudiant/les-etudiant.component';
import { ModifierUnEtudiantComponent } from './modifier-un-etudiant/modifier-un-etudiant.component';
const routes: Routes = [
  {path: "lister", component : LesEtudiantComponent},
  {path: "add-etudiant", component : AjouterUnEtudiantComponent},
  {path: "modifierEtudiant/:id", component: ModifierUnEtudiantComponent },
{ path: "", redirectTo: "lister", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
