import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../shared/modele/etudiant';
import { UserserviceService } from '../shared/services/userservice.service';

@Component({
  selector: 'app-ajouter-un-etudiant',
  templateUrl: './ajouter-un-etudiant.component.html',
  styleUrls: ['./ajouter-un-etudiant.component.scss']
})
export class AjouterUnEtudiantComponent implements OnInit {
newEtudiant = new Etudiant();
  constructor(private US: UserserviceService,private router :Router) { }

  ngOnInit(): void {
  }

  AjouterUnEtudiant(){
    this.US.AjouterUnEtudiant(this.newEtudiant).subscribe(prod => {
      console.log(prod);
      });
      
    this.router.navigate(['lister']);
  }

}
