package dev.kraigochieng.patient_visit_system.server.services;


import dev.kraigochieng.patient_visit_system.server.models.Patient;

import java.time.LocalDate;
import java.util.List;

public interface PatientService {
    public List<Patient> getPatients();
    public Patient postPatient(Patient patient);
    public List<Patient> getPatientsByRegistrationDate(String registrationDateAsString);
}
