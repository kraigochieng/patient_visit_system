package dev.kraigochieng.patient_visit_system.server.repositories;

import dev.kraigochieng.patient_visit_system.server.models.Questionnaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface QuestionnaireRepository extends JpaRepository<Questionnaire, UUID> {
}
