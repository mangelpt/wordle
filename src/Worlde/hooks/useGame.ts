import {UseTimer} from "./useTimer.ts";

export const useGame = () => {
    const {remainingTime, startTimer, onClickReset} = UseTimer();


    return {
        remainingTime,
        startTimer,
        onClickReset
    }
}