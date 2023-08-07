package dev.kraigochieng.patient_visit_system.server.models;

import dev.kraigochieng.patient_visit_system.server.enums.GeneralHealth;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "questionnaire")
@Entity(name = "Questionnaire")
public class Questionnaire {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @OneToOne
    @JoinColumn(name = "visit_id", referencedColumnName = "id")
    private Visit visit;

    @Column(name = "general_health")
    private GeneralHealth generalHealth;

    @Column(name = "on_diet_to_loose_weight")
    private Boolean onDietToLooseWeight;

    @Column(name = "on_drugs")
    private Boolean onDrugs;

    @Column(name = "comments", columnDefinition = "TEXT")
    private String comments;
}
