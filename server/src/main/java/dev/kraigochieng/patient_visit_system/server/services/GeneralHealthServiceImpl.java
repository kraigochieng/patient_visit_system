package dev.kraigochieng.patient_visit_system.server.services;

import dev.kraigochieng.patient_visit_system.server.enums.GeneralHealth;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
@Service
public class GeneralHealthServiceImpl implements GeneralHealthService{
    @Override
    public List<GeneralHealth> getGeneralHealth() {
        return Arrays.asList(GeneralHealth.values());
    }
}
