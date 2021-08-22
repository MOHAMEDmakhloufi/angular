import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../shared/modele/etudiant';
import { UserserviceService } from '../shared/services/userservice.service';

@Component({
  selector: 'app-consulter-les-etudiant',
  templateUrl: './consulter-les-etudiant.component.html',
  styleUrls: ['./consulter-les-etudiant.component.scss']
})
export class ConsulterLesEtudiantComponent implements OnInit {
  etudiant! : Etudiant[];
  constructor(private US: UserserviceService) { }

  ngOnInit(): void {
    this.ConsulterLesEtudiant();
  }
  
  ConsulterLesEtudiant(){
    this.US.ConsulterLesEtudiant().subscribe (data =>{this.etudiant = data}, err =>{console.log('erorr');});
  }
}
