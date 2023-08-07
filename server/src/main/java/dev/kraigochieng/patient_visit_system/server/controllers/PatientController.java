package dev.kraigochieng.patient_visit_system.server.controllers;

import dev.kraigochieng.patient_visit_system.server.models.Patient;
import dev.kraigochieng.patient_visit_system.server.services.PatientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/patients")
@CrossOrigin

public class PatientController {
    @Autowired
    PatientServiceImpl patientServiceImpl;
    @GetMapping(path = "get")
    public ResponseEntity<List<Patient>> getPatients() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(patientServiceImpl.getPatients());
    }

    @PostMapping(path = "post")
    public  ResponseEntity<Patient> postPatient(@RequestBody Patient patient) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(patientServiceImpl.postPatient(patient));
    }
}
