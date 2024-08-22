package org.dongguk.vsa.modeul.dialogue.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.contants.Constants;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;

import java.util.List;
import java.util.Random;

@Getter
public class DialogueBriefListDto extends SelfValidating<DialogueBriefListDto> {

    @JsonProperty("dialogues")
    @NotNull
    private final List<DialogueBriefDto> dialogues;

    @Builder
    public DialogueBriefListDto(
            List<DialogueBriefDto> dialogues
    ) {
        this.dialogues = dialogues;
    }

    public static DialogueBriefListDto fromEntities(List<Dialogue> entities) {
        return DialogueBriefListDto.builder()
                .dialogues(entities.stream()
                        .map(DialogueBriefDto::fromEntity)
                        .toList())
                .build();
    }

    public static class DialogueBriefDto extends SelfValidating<DialogueBriefDto> {

        @JsonProperty("id")
        @NotNull
        private final Long id;

        @JsonProperty("user_profile_image_url")
        @NotNull
        private final String userProfileImageUrl;

        @JsonProperty("user_random_nickname")
        @NotNull
        private final String userRandomNickname;

        @JsonProperty("is_answered_llm")
        @NotNull
        private final Boolean isAnsweredLlm;

        @Builder
        public DialogueBriefDto(
                Long id,
                String userProfileImageUrl,
                String userRandomNickname,
                Boolean isAnsweredLlm
        ) {
            this.id = id;
            this.userProfileImageUrl = userProfileImageUrl;
            this.userRandomNickname = userRandomNickname;
            this.isAnsweredLlm = isAnsweredLlm;
        }


        public static DialogueBriefDto fromEntity(Dialogue entity) {
            int randomAdjectiveIndex = new Random().nextInt(Constants.ADJECTIVES.size());
            int randomAnimalIndex = new Random().nextInt(Constants.ANIMALS.size());

            return DialogueBriefDto.builder()
                    .id(entity.getId())
                    .userProfileImageUrl(entity.getUser().getProfileImageUrl())
                    .userRandomNickname(Constants.ADJECTIVES.get(randomAdjectiveIndex) + " " + Constants.ANIMALS.get(randomAnimalIndex))
                    .isAnsweredLlm(entity.getIsAnsweredByLlm())
                    .build();
        }
    }
}
