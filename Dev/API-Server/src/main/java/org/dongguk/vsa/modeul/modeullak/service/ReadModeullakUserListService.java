package org.dongguk.vsa.modeul.modeullak.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.dto.response.ModeullakUserBriefListResponseDto;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadModeullakUserListUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReadModeullakUserListService implements ReadModeullakUserListUseCase {

    private final UserRepository userRepository;
    private final ModeullakRepository modeullakRepository;
    private final UserModeullakRepository userModeullakRepository;

    @Override
    public ModeullakUserBriefListResponseDto execute(UUID accountId, Long modeullakId) {
        // 1. 사용자 및 모들락 정보 조회
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        Modeullak modeullak = modeullakRepository.findById(modeullakId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 권한 확인
        UserModeullak selfModeullak = userModeullakRepository.findWithUserByUserAndModeullak(user, modeullak)
                .orElseThrow(() -> new CommonException(ErrorCode.ACCESS_DENIED));

        // 3. 모들락 사용자 목록 조회(본인 제외)
        List<UserModeullak> otherModeullaks = userModeullakRepository.findAllWithUserByModeullakAndUserNot(modeullak, user);

        return ModeullakUserBriefListResponseDto.fromEntities(selfModeullak, otherModeullaks);
    }
}
