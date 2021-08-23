package fsb.administration.etudiantms;

import fsb.administration.etudiantms.entities.Etudiant;
import fsb.administration.etudiantms.repositories.EtudiantRepository;
import fsb.administration.etudiantms.services.EtudiantService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;


@SpringBootApplication
public class EtudiantMsApplication {

    public static void main(String[] args) {
        SpringApplication.run(EtudiantMsApplication.class, args);
    }
   /* @Bean
    CommandLineRunner commandLineRunner(EtudiantRepository etudiantRepository, EtudiantService etudiantService){
        Etudiant etudiant = new Etudiant(null, "mak","med",14006362L, "dnn","med@gmail.com","29020932","math");
        Etudiant etudiant1 = new Etudiant(null, "amamou","ahmed",14005698L, "dnn","ahmed@gmail.com","29870943","science");
        Etudiant etudiant2 = new Etudiant(null, "mak","med",14008008L, "dnn","med@gmail.com","29020932","math");
        Etudiant etudiant3 = new Etudiant(null, "mak","sami",14003571L, "dnn","ahmed@gmail.com","29870943","science");
        return args -> {
            etudiantRepository.save(etudiant);
            etudiantRepository.save(etudiant1);
            etudiantRepository.save(etudiant2);
            etudiantRepository.save(etudiant3);
        };
    }*/
}
