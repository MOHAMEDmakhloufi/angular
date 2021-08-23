import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Etudiant } from '../shared/modele/etudiant';
import { UserserviceService } from '../shared/services/userservice.service';

@Component({
  selector: 'app-modifier-un-etudiant',
  templateUrl: './modifier-un-etudiant.component.html',
  styleUrls: ['./modifier-un-etudiant.component.scss']
})
export class ModifierUnEtudiantComponent implements OnInit {
currentEtudiant= new Etudiant();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private US: UserserviceService) { }

  ngOnInit(): void {
    this.US.ConsulterUnEtudiant(this.activatedRoute.snapshot.params.id).subscribe(etud =>{ this.currentEtudiant = etud; });
  }
  ModifierUnEtudiant(){
    this.US.ModifierUnEtudiant(this.activatedRoute.snapshot.params.id, this.currentEtudiant).subscribe(prod => {
      this.router.navigate(['lister']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
  }
}
