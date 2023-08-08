package dev.kraigochieng.patient_visit_system.server.controllers;

import dev.kraigochieng.patient_visit_system.server.models.Visit;
import dev.kraigochieng.patient_visit_system.server.services.VisitServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/v1/visits")
@CrossOrigin

public class VisitController {
    @Autowired
    VisitServiceImpl visitServiceImpl;
    @GetMapping(path = "get")
    public ResponseEntity<List<Visit>> getVisits() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(visitServiceImpl.getVisits());
    }

    @PostMapping(path = "post/{patientId}")
    public  ResponseEntity<Visit> postVisit(@RequestBody Visit visit, @PathVariable UUID patientId) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(visitServiceImpl.postVisit(visit, patientId));
    }
}
