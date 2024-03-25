import React, {useEffect, useState} from 'react';
import TopMenuItem from "../atoms/TopMenuItem"
import * as S from "./TopMenu.style"

const TopMenu = () => {

    const [stageNumber, setStageNumber] = useState<number>(1);

    const handleStageChange = (state: number) => {
        setStageNumber(state)
    }

    return (
        <S.Container>
            <TopMenuItem isSelected={1 === stageNumber} onClick={() => handleStageChange(1)}>번호생성</TopMenuItem>
            <TopMenuItem isSelected={2 === stageNumber} onClick={() => handleStageChange(2)}>회차검색</TopMenuItem>
            <TopMenuItem isSelected={3 === stageNumber} onClick={() => handleStageChange(3)}>번호통계</TopMenuItem>
        </S.Container>
    );
};

export default TopMenu;