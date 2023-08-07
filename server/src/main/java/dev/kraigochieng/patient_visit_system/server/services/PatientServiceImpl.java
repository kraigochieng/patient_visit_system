package dev.kraigochieng.patient_visit_system.server.services;

import dev.kraigochieng.patient_visit_system.server.models.Patient;
import dev.kraigochieng.patient_visit_system.server.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PatientServiceImpl implements PatientService{
    @Autowired
    PatientRepository patientRepository;
    @Override
    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Patient postPatient(Patient patient) {
        return patientRepository.save(patient);
    }
}
