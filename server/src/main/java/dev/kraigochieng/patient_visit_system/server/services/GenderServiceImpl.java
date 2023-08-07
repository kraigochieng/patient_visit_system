package dev.kraigochieng.patient_visit_system.server.services;

import dev.kraigochieng.patient_visit_system.server.enums.Gender;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
@Service
public class GenderServiceImpl implements GenderService{
    @Override
    public List<Gender> getGenders() {
        return Arrays.asList(Gender.values());
    }
}
