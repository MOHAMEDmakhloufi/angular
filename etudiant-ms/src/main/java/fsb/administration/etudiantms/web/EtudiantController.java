package fsb.administration.etudiantms.web;

import fsb.administration.etudiantms.entities.Etudiant;
import fsb.administration.etudiantms.repositories.EtudiantRepository;
import fsb.administration.etudiantms.services.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class EtudiantController {

    @Autowired
    EtudiantRepository etudiantRepository;
    @Autowired
    EtudiantService etudiantService;

    @PostMapping
    public void AjouterUnEtudiant(@RequestBody Etudiant etudiant){
        this.etudiantService.AjouterUnEtudiant(etudiant);
    }

    @PutMapping("/{idEtudiant}")
    public void ModifierUnEtudiant(@PathVariable (name = "idEtudiant") Long id, @RequestBody Etudiant etudiant){
        this.etudiantService.ModifierUnEtudiant(id, etudiant);
    }
    @DeleteMapping("/{idEtudiant}")
    public void SupprimerUnEtudiant(@PathVariable (name = "idEtudiant") Long id){
        this.etudiantService.SupprimerUnEtudiant(id);
    }
    @GetMapping("/{idEtudiant}")
    public Etudiant ConsulterUnEtudiant(@PathVariable (name = "idEtudiant") Long id){
       return this.etudiantService.ConsulterUnEtudiant(id);
    }
    @RequestMapping(
            method = {RequestMethod.GET}
    )
    public List<Etudiant> ConsulterLesEtudiant(){
        return this.etudiantService.ConsulterLesEtudiant();
    }

    @GetMapping("/recherche")
    public List<Etudiant> RecherchePrenomNomCin(@RequestParam (name = "prenom", required = false)String prenom,
                                                @RequestParam  (name = "nom", required = false) String nom,
                                                @RequestParam  (name = "cin", required = false)String cin ){
        return this.etudiantService.RecherchePrenomNomCin(prenom, nom, cin);
    }
}
