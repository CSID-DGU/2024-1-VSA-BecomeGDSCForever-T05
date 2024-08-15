package org.dongguk.vsa.modeul.modeullak.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.HttpCommonException;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
import org.dongguk.vsa.modeul.modeullak.dto.response.ReadModeullakSummaryResponseDto;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadModeullakSummaryUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReadModeullakSummaryService implements ReadModeullakSummaryUseCase {

    private final ModeullakRepository modeullakRepository;

    private final UserRepository userRepository;
    private final UserModeullakRepository userModeullakRepository;

    @Override
    public ReadModeullakSummaryResponseDto execute(UUID accountId, Long modeullakId) {
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new HttpCommonException(ErrorCode.NOT_FOUND_USER));

        Modeullak modeullak = modeullakRepository.findWithTagsById(modeullakId)
                .orElseThrow(() -> new HttpCommonException(ErrorCode.NOT_FOUND_RESOURCE));

        if (isNotHadRole(user, modeullak)) {
            throw new HttpCommonException(ErrorCode.ACCESS_DENIED);
        }

        return ReadModeullakSummaryResponseDto.fromEntity(modeullak);
    }

    /**
     * 해당 유저가 모들락의 멤버 중 한명인지 확인
     * @param user 사용자
     * @param modeullak 모들락
     * @return 해당 유저가 모들락의 Host인지 여부
     */
    private Boolean isNotHadRole(User user, Modeullak modeullak) {
        return userModeullakRepository.findByUserAndModeullak(user, modeullak).isEmpty();
    }
}
