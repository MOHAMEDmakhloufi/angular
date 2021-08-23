package fsb.administration.etudiantms.repositories;


import fsb.administration.etudiantms.entities.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EtudiantRepository extends JpaRepository<Etudiant,Long> {
     Etudiant findByCin(String cin);
     List<Etudiant> findByPrenom(String prenom);
     List<Etudiant> findByNom(String nom);
     List<Etudiant> findByNomAndPrenom(String nom,String prenom);


}
