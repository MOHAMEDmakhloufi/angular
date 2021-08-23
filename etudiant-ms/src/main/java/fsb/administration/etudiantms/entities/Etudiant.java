package fsb.administration.etudiantms.entities;

import lombok.*;
import javax.persistence.*;


@Entity @Data  @NoArgsConstructor @AllArgsConstructor
public class Etudiant {
    @Id @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    @Column( unique = true)
    private String cin;
    private String ddn;
    private String mail;
    private String phone;
    private String classe;


}
