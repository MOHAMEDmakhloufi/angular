import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../modele/etudiant';
import {HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  
  public host='http://localhost:8082/etudiants/api'
  constructor(private http :HttpClient) { }

  public ConsulterLesEtudiant(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.host);
  }

  public ConsulterUnEtudiant(id : number): Observable<Etudiant>{
    return this.http.get<Etudiant>(`${this.host}/${id}`);
  }

  public ModifierUnEtudiant(id : number, etudiant : Etudiant):Observable<Etudiant>{
    return this.http.put<Etudiant>(`${this.host}/${id}`,etudiant, httpOptions);
  }

  public AjouterUnEtudiant(etudiant : Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(this.host,etudiant, httpOptions);
  }

  public SupprimerUnEtudiant(id : number){
    return this.http.delete(`${this.host}/${id}`, httpOptions);
  }

  public RecherchePrenomNomCin(prenom : String, nom :String, cin : String): Observable<Etudiant[]>{
    const url = `${this.host}/recherche?cin=${cin}&prenom=${prenom}&nom=${nom}`;
    return this.http.get<Etudiant[]>(url);
  }
}
