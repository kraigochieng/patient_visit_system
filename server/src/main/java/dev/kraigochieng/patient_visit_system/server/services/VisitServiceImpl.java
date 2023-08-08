package dev.kraigochieng.patient_visit_system.server.services;

import dev.kraigochieng.patient_visit_system.server.models.Patient;
import dev.kraigochieng.patient_visit_system.server.models.Visit;
import dev.kraigochieng.patient_visit_system.server.repositories.PatientRepository;
import dev.kraigochieng.patient_visit_system.server.repositories.VisitRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class VisitServiceImpl implements VisitService {
    @Autowired
    VisitRepository visitRepository;

    @Autowired
    PatientRepository patientRepository;

    @Override
    public List<Visit> getVisits() {
        return visitRepository.findAll();
    }

    @Override
    public Visit postVisit(Visit visit, UUID patientId) {
        // Get the patient
        Patient patient = patientRepository.findById(patientId).orElseThrow(()-> new EntityNotFoundException("Patient not found when trying to post visit"));
        // Add visit to patient list
        patient.getVisits().add(visit);
        // Add patent to the visit
        visit.setPatient(patient);
        visit.calculateBmiValue();
        visit.calculateBmiStatus();
        return visitRepository.save(visit);
    }
}
