import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../shared/modele/etudiant';
import { UserserviceService } from '../shared/services/userservice.service';

@Component({
  selector: 'app-les-etudiant',
  templateUrl: './les-etudiant.component.html',
  styleUrls: ['./les-etudiant.component.scss']
})
export class LesEtudiantComponent implements OnInit {
  etudiant! : Etudiant[];
  firstName : String="";
  lastName : String="";
  cin : String="" ;
  constructor(private US: UserserviceService) { }

  ngOnInit(): void {
    this.ConsulterLesEtudiant();
  }
  
  ConsulterLesEtudiant(){
    this.US.ConsulterLesEtudiant().subscribe (data =>{this.etudiant = data}, err =>{console.log('erorr');});
  }

  SupprimerUnEtudiant(etudiant :Etudiant){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.US.SupprimerUnEtudiant(etudiant.id).subscribe(() => {
    console.log("produit supprimé");
    this.SuprimerEtudiantDuTableau(etudiant);
    });
  }

  SuprimerEtudiantDuTableau(etudiant: Etudiant) {
    this.etudiant.forEach((cur, index) => {
      if (etudiant.id === cur.id) {
        this.etudiant.splice(index, 1);
      }
    });
  }

    search(){
      if(this.firstName == "" && this.lastName == "" && this.cin == null)
        this.ngOnInit();
       else 
        this.US.RecherchePrenomNomCin(this.firstName, this.lastName, this.cin).subscribe (data =>{this.etudiant = data}, err =>{console.log('erorr');});
    }
}
