package org.dongguk.vsa.modeul.modeullak.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.contants.Constants;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

@Getter
public class ModeullakUserBriefListResponseDto extends SelfValidating<ModeullakUserBriefListResponseDto> {

    @JsonProperty("self_user")
    private final ModeullakUserBriefDto selfUser;

    @JsonProperty("other_users")
    private final List<ModeullakUserBriefDto> otherUsers;

    @Builder
    public ModeullakUserBriefListResponseDto(ModeullakUserBriefDto selfUser, List<ModeullakUserBriefDto> otherUsers) {
        this.selfUser = selfUser;
        this.otherUsers = otherUsers;

        this.validateSelf();
    }

    public static ModeullakUserBriefListResponseDto fromEntities(UserModeullak selfUser, List<UserModeullak> otherUsers) {
        ModeullakUserBriefDto selfUserDto = ModeullakUserBriefDto.fromEntity(selfUser.getUser());
        List<ModeullakUserBriefDto> otherUserDtoList = new ArrayList<>(otherUsers.stream()
                .map(userModeullak -> ModeullakUserBriefDto.fromEntity(userModeullak.getUser()))
                .toList());

        return ModeullakUserBriefListResponseDto.builder()
                .selfUser(selfUserDto)
                .otherUsers(otherUserDtoList)
                .build();
    }

    @Getter
    public static class ModeullakUserBriefDto extends SelfValidating<ModeullakUserBriefDto> {
        @JsonProperty("id")
        private final UUID id;

        @JsonProperty("nickname")
        private final String nickname;

        @JsonProperty("profile_image_url")
        private final String profileImageUrl;

        @Builder
        public ModeullakUserBriefDto(
                UUID id,
                String nickname,
                String profileImageUrl
        ) {
            this.id = id;
            this.nickname = nickname;
            this.profileImageUrl = profileImageUrl;

            this.validateSelf();
        }

        public static ModeullakUserBriefDto fromEntity(User user) {
            int randomAdjectiveIndex = new Random().nextInt(Constants.ADJECTIVES.size());
            int randomAnimalIndex = new Random().nextInt(Constants.ANIMALS.size());

            return ModeullakUserBriefDto.builder()
                    .id(user.getId())
                    .nickname(Constants.ADJECTIVES.get(randomAdjectiveIndex) + " " + Constants.ANIMALS.get(randomAnimalIndex))
                    .profileImageUrl(user.getProfileImageUrl())
                    .build();
        }
    }
}
