package dev.kraigochieng.patient_visit_system.server.controllers;

import dev.kraigochieng.patient_visit_system.server.models.Questionnaire;
import dev.kraigochieng.patient_visit_system.server.services.QuestionnaireServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/v1/questionnaires")
@CrossOrigin

public class QuestionnaireController {
    @Autowired
    QuestionnaireServiceImpl questionnaireServiceImpl;
    @GetMapping(path = "get")
    public ResponseEntity<List<Questionnaire>> getQuestionnaires() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(questionnaireServiceImpl.getQuestionnaires());
    }

    @PostMapping(path = "post/{visitId}")
    public  ResponseEntity<Questionnaire> postQuestionnaire(@RequestBody Questionnaire questionnaire, @PathVariable UUID visitId) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(questionnaireServiceImpl.postQuestionnaire(questionnaire, visitId));
    }
}
