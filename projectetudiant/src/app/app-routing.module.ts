import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterLesEtudiantComponent } from './consulter-les-etudiant/consulter-les-etudiant.component';

const routes: Routes = [
  {path: "lister", component : ConsulterLesEtudiantComponent},
{ path: "", redirectTo: "lister", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
