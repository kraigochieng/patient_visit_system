package dev.kraigochieng.patient_visit_system.server.repositories;

import dev.kraigochieng.patient_visit_system.server.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface PatientRepository extends JpaRepository<Patient, UUID> {
    @Query("SELECT p FROM Patient p WHERE p.registeredAt = :registrationDate")
    List<Patient> getPatientsByRegistrationDate(LocalDate registrationDate);
}
