package dev.kraigochieng.patient_visit_system.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import dev.kraigochieng.patient_visit_system.server.enums.BMIStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "visit")
@Entity(name = "visit")
public class Visit {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "patient_id", referencedColumnName = "id")
    @JsonBackReference
    private Patient patient;

    @OneToOne(mappedBy = "visit")
    @JsonManagedReference
    private Questionnaire questionnaire;

    @Column(name = "date_of_visit")
    private LocalDate dateOfVisit;

    // Height in CM
    @Column(name = "height")
    private Float height;

    // Weight in KG
    @Column(name = "weight")
    private Float weight;

    @Column(name = "bmi_value")
    private Float bmiValue;

    @Column(name = "bmi_status")
    private BMIStatus bmiStatus;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public void calculateBmiValue() {
        this.bmiValue = (float) (this.weight / Math.pow((this.height / 100), 2));
    }
    public void calculateBmiStatus() {
        if(this.bmiValue < 18.5) {
            this.bmiStatus = BMIStatus.UNDERWEIGHT;
        } else if(this.bmiValue >= 18.5 && this.bmiValue < 25) {
            this.bmiStatus = BMIStatus.NORMAL;
        } else if(this.bmiValue >= 25) {
            this.bmiStatus = BMIStatus.OVERWEIGHT;
        }
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
