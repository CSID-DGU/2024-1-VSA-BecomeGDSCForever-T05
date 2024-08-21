package org.dongguk.vsa.modeul.modeullak.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;

@Getter
public class CurrentUserParticipationStatusesResponseDto extends SelfValidating<CurrentUserParticipationStatusesResponseDto> {

    @JsonProperty("modeullak_id")
    private final Long modeullakId;

    @JsonProperty("modeullak_title")
    private final String modeullakTitle;

    @Builder
    public CurrentUserParticipationStatusesResponseDto(
            Long modeullakId,
            String modeullakTitle
    ) {
        this.modeullakId = modeullakId;
        this.modeullakTitle = modeullakTitle;
    }

    public static CurrentUserParticipationStatusesResponseDto fromEntity(Modeullak modeullak) {
        return CurrentUserParticipationStatusesResponseDto.builder()
                .modeullakId(modeullak.getId())
                .modeullakTitle(modeullak.getTitle())
                .build();
    }

    public static CurrentUserParticipationStatusesResponseDto empty() {
        return CurrentUserParticipationStatusesResponseDto.builder()
                .modeullakId(null)
                .modeullakTitle(null)
                .build();
    }
}
