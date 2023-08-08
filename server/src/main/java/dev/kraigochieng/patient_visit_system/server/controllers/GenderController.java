package dev.kraigochieng.patient_visit_system.server.controllers;

import dev.kraigochieng.patient_visit_system.server.enums.Gender;
import dev.kraigochieng.patient_visit_system.server.services.GenderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/genders")
@CrossOrigin
public class GenderController {
    @Autowired
    GenderServiceImpl genderServiceImpl;
    @GetMapping(path = "get")
    public ResponseEntity<List<Gender>> getGenders() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(genderServiceImpl.getGenders());
    }
}
