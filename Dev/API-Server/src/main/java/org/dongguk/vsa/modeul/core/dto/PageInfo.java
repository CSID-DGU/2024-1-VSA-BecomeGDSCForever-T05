package org.dongguk.vsa.modeul.core.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.domain.Page;

@Getter
public class PageInfo extends SelfValidating<PageInfo> {

    @JsonProperty("total_page")
    @NotNull
    Integer totalPage;

    @JsonProperty("current_page")
    @NotNull
    Integer currentPage;

    @JsonProperty("total_cnt")
    @NotNull
    Integer totalCnt;

    @JsonProperty("current_cnt")
    @NotNull
    Integer currentCnt;

    @Builder
    public PageInfo(
            Integer totalPage,
            Integer currentPage,
            Integer totalCnt,
            Integer currentCnt
    ) {
        this.totalPage = totalPage;
        this.currentPage = currentPage;
        this.totalCnt = totalCnt;
        this.currentCnt = currentCnt;

        validateSelf();
    }

    public static PageInfo fromPage(Page<?> page) {
        return PageInfo.builder()
                .totalPage(page.getTotalPages())
                .currentPage(page.getTotalPages() == 0 ? 0 : page.getNumber() + 1)
                .totalCnt((int) page.getTotalElements())
                .currentCnt(page.getNumberOfElements())
                .build();
    }

}
