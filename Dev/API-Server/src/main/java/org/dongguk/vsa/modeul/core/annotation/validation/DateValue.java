package org.dongguk.vsa.modeul.core.annotation.validation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import org.dongguk.vsa.modeul.core.validator.DateValueValidator;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.PARAMETER, ElementType.FIELD})
@Constraint(validatedBy = DateValueValidator.class)
public @interface DateValue {

    String message() default "잘못된 데이터 형식입니다. (yyyy-MM-dd)";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
