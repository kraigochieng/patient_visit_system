package dev.kraigochieng.patient_visit_system.server.repositories;

import dev.kraigochieng.patient_visit_system.server.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface PatientRepository extends JpaRepository<Patient, UUID> {

}
