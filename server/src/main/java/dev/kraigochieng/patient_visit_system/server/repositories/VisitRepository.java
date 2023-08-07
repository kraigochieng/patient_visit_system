package dev.kraigochieng.patient_visit_system.server.repositories;

import dev.kraigochieng.patient_visit_system.server.models.Visit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface VisitRepository extends JpaRepository<Visit, UUID> {

}
