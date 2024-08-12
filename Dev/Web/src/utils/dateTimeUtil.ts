export const convertDateToString = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
}

export const convertStringToDate = (date: string): Date => {
    return new Date(date)
};

export const convertDateToKoreanString = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`
}

/**
 * @description 날짜를 받아서 해당 날짜의 시간읠 계산합니다.
 */
export const calculateTime = (date: Date): string => {
    const milliSeconds = new Date().getDate() - date.getDate();

    const seconds = milliSeconds / 1000;

    if (seconds < 60) {
        return `${seconds}초 전`
    }

    const minutes = seconds / 60;

    if (minutes < 60) {
        return `${minutes}분 전`
    }

    const hours = minutes / 60;

    if (hours < 24) {
        return `${hours}시간 전`
    }

    const days = hours / 24;

    if (days < 7) {
        return `${days}일 전`
    }

    const weeks = days / 7;

    if (weeks < 5) {
        return `${weeks}주 전`
    }

    const months = days / 30;

    if (months < 12) {
        return `${months}개월 전`
    }

    const years = months / 12;

    return `${years}년 전`
}