package dev.kraigochieng.patient_visit_system.server.services;

import dev.kraigochieng.patient_visit_system.server.models.Visit;

import java.util.List;
import java.util.UUID;

public interface VisitService {
    public List<Visit> getVisits();
    public Visit postVisit(Visit visit, UUID patientId);
}
