import {useEffect, useRef, useState} from "react";
import {VALID_GUESSES} from "../data/data.ts";

export const UseTimer = () => {
    const Ref = useRef<number | null>(null);
    const [timer, setTimer] = useState('00:00:00');
    const [currentWord, setCurrentWord] = useState('');
    const getTimeRemaining = (e: any) => {
        const total = Date.parse(e) - Date.parse(new Date().toString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e: any) => {
        const {total, hours, minutes, seconds}
            = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }

    }

    const clearTimer = (e: any) => {
        setTimer('00:05:00');
        if (Ref.current) {
            clearInterval(Ref.current);
        }
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
        setCurrentWord(VALID_GUESSES[Math.floor(Math.random() * VALID_GUESSES.length)])
    }

    const getDeadTime = () => {
        const deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 300);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);


    const onClickReset = () => {
        clearTimer(getDeadTime());
    }

    if (timer === '00:00:00'){
        clearTimer(getDeadTime());
    }

    console.log(currentWord)
    return {
        remainingTime: timer,
        startTimer,
        onClickReset,
        currentWord
    }

}