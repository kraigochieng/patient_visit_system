package dev.kraigochieng.patient_visit_system.server.services;

import dev.kraigochieng.patient_visit_system.server.models.Questionnaire;
import dev.kraigochieng.patient_visit_system.server.models.Visit;
import dev.kraigochieng.patient_visit_system.server.repositories.QuestionnaireRepository;
import dev.kraigochieng.patient_visit_system.server.repositories.VisitRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class QuestionnaireServiceImpl implements QuestionnaireService{
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Autowired
    VisitRepository visitRepository;

    @Override
    public List<Questionnaire> getQuestionnaires() {
        return questionnaireRepository.findAll();
    }

    @Override
    public Questionnaire postQuestionnaire(Questionnaire questionnaire, UUID visitId) {
        // Look for visit
        Visit visit = visitRepository.findById(visitId).orElseThrow(() -> new EntityNotFoundException("Visit not found when trying to post questionnaire"));
        // Set the questionnaire of the visit
        visit.setQuestionnaire(questionnaire);
        // Set the visit to the questionnaire
        questionnaire.setVisit(visit);
        return questionnaireRepository.save(questionnaire);
    }
}
