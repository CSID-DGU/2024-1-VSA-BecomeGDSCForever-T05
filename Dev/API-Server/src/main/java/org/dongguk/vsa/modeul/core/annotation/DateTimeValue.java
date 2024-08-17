package org.dongguk.vsa.modeul.core.annotation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import org.dongguk.vsa.modeul.core.validator.DateTimeValueValidator;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.PARAMETER, ElementType.FIELD})
@Constraint(validatedBy = DateTimeValueValidator.class)
public @interface DateTimeValue {

    String message() default "잘못된 데이터 형식입니다. (yyyy-MM-dd HH:mm)";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
