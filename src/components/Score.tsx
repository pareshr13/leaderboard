import React, { useState, useEffect } from 'react';

import { ItemScore } from './StyledComponent';
import {
    SCORE_INTERVAL,
    SCORE_INTERVAL_NUMBER,
    SCORE_DIVISOR
} from '../constants';

interface Props {
    score: number;
}

const Score: React.FC<Props> = ({ score }) => {
    const [num, setNum] = useState(score);
    useEffect(() => {
        let i = SCORE_INTERVAL_NUMBER;
        const interval = setInterval(() => {
            i -= 1;
            setNum((n) => Math.floor(n + (score - n) / SCORE_DIVISOR));
            if (i <= 0) {
                setNum(score);
                clearInterval(interval);
            }
        }, SCORE_INTERVAL);
        return function cleanup() {
            clearInterval(interval);
        };
    }, [score]);
    return <ItemScore>{num}pt</ItemScore>;
};

export default Score;