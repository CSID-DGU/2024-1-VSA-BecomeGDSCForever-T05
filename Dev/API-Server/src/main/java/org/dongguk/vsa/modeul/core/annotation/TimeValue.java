package org.dongguk.vsa.modeul.core.annotation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import org.dongguk.vsa.modeul.core.validator.TimeValueValidator;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.PARAMETER, ElementType.FIELD})
@Constraint(validatedBy = TimeValueValidator.class)
public @interface TimeValue {

    String message() default "잘못된 데이터 형식입니다. (HH:mm)";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
