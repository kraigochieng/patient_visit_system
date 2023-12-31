package dev.kraigochieng.patient_visit_system.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import dev.kraigochieng.patient_visit_system.server.enums.GeneralHealth;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
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
    @JsonBackReference
    private Visit visit;

    @Column(name = "general_health")
    private GeneralHealth generalHealth;

    @Column(name = "on_diet_to_lose_weight")
    private Boolean onDietToLoseWeight;

    @Column(name = "on_drugs")
    private Boolean onDrugs;

    @Column(name = "comments", columnDefinition = "TEXT")
    private String comments;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
