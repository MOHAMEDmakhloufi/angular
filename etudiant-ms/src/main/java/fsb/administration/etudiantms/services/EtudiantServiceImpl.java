package fsb.administration.etudiantms.services;

import fsb.administration.etudiantms.entities.Etudiant;
import fsb.administration.etudiantms.exceptions.EtudiantNotFoundException;
import fsb.administration.etudiantms.repositories.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EtudiantServiceImpl implements EtudiantService{

    @Autowired
    EtudiantRepository etudiantRepository;

    @Override
    public void AjouterUnEtudiant(Etudiant etudiant){
        this.etudiantRepository.save(etudiant);
    }

    @Override
    public void ModifierUnEtudiant(Long id, Etudiant etudiant){
        Etudiant etudiant1 = etudiantRepository.findById(id).get();
        if(etudiant.getNom() != null)
            etudiant1.setNom(etudiant.getNom());
        if(etudiant.getPrenom() != null)
            etudiant1.setPrenom(etudiant.getPrenom());
        if(etudiant.getCin() != null)
            etudiant1.setCin(etudiant.getCin());
        if(etudiant.getDdn() != null)
            etudiant1.setDdn(etudiant.getDdn());
        if(etudiant.getMail() != null)
            etudiant1.setMail(etudiant.getMail());
        if(etudiant.getPhone() != null)
            etudiant1.setPhone(etudiant.getPhone());
        if(etudiant.getClasse() != null)
            etudiant1.setClasse(etudiant.getClasse());
        etudiantRepository.save(etudiant1);
    }

    @Override
    public void SupprimerUnEtudiant(Long id){
        boolean exists = etudiantRepository.existsById(id);
        if (!exists) {
            throw new EtudiantNotFoundException("not found" + id );
        }
        etudiantRepository.deleteById(id);
    }
    @Override
    public Etudiant ConsulterUnEtudiant(Long id){
        return etudiantRepository.findById(id).get();
    }
    @Override
    public List<Etudiant> ConsulterLesEtudiant(){
        return etudiantRepository.findAll();
    }

    @Override
    public List<Etudiant> RecherchePrenomNomCin(String prenom, String nom, String cin ){
        if(cin != ""){
            List<Etudiant> etudiants = new ArrayList<>();
            Etudiant etudiant = etudiantRepository.findByCin(cin);
            if(etudiant == null){
                throw new EtudiantNotFoundException("cin \""+cin+"\" n'existe pas");
            }
            etudiants.add(etudiant);
            return etudiants;
        }else if((prenom !="") && (nom != "")){
            return etudiantRepository.findByNomAndPrenom(nom,prenom);

        }else if ((prenom == "") && (nom != "")){
            return etudiantRepository.findByNom(nom);
        }else if ((prenom != "") && (nom == "")){
            return etudiantRepository.findByPrenom(prenom);
        }else return etudiantRepository.findAll();

    }

}




