package fsb.administration.etudiantms.services;

import fsb.administration.etudiantms.entities.Etudiant;

import java.util.List;

public interface EtudiantService  {

    public void AjouterUnEtudiant(Etudiant etudiant);
    public void ModifierUnEtudiant(Long id, Etudiant etudiant);
    public void SupprimerUnEtudiant(Long id);
    public Etudiant ConsulterUnEtudiant(Long id);
    public List<Etudiant> ConsulterLesEtudiant();
    public List<Etudiant> RecherchePrenomNomCin(String prenom, String nom, String cin );

}
