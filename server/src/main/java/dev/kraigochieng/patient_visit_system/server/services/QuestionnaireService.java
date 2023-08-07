package dev.kraigochieng.patient_visit_system.server.services;

import dev.kraigochieng.patient_visit_system.server.models.Questionnaire;

import java.util.List;
import java.util.UUID;

public interface QuestionnaireService {
    public List<Questionnaire> getQuestionnaires();
    public Questionnaire postQuestionnaire(Questionnaire questionnaire, UUID visitId);
}
