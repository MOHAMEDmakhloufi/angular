import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../modele/etudiant';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  
  public host='http://localhost:8082/etudiants/api'
  constructor(private http :HttpClient) { }

  public ConsulterLesEtudiant(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.host);
  }

  public ModifierUnEtudiant(id : number, etudiant : Etudiant):Observable<Etudiant>{
    return this.http.put<Etudiant>(`${this.host}${id}`,etudiant);
  }

  public AjouterUnEtudiant(etudiant : Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(this.host,etudiant);
  }

  public SupprimerUnEtudiant(id : number) : Observable<Etudiant> {
    return this.http.delete<Etudiant>(`${this.host}/${id}`);
  }
}
