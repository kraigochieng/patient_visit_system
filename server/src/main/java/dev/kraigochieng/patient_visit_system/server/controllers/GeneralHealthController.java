package dev.kraigochieng.patient_visit_system.server.controllers;

import dev.kraigochieng.patient_visit_system.server.enums.GeneralHealth;
import dev.kraigochieng.patient_visit_system.server.services.GeneralHealthServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/general_health")
@CrossOrigin
public class GeneralHealthController {
    @Autowired
    GeneralHealthServiceImpl generalHealthServiceImpl;
    @GetMapping(path = "get")
    public ResponseEntity<List<GeneralHealth>> getGeneralHealth() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(generalHealthServiceImpl.getGeneralHealth());
    }
}
