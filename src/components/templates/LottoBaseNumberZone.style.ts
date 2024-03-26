import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision"

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    background-color: #ffffff;
`

export const LeftBox = styled(FlexCenterDivision)`
    width: 140px;
    height: 60px;
    margin-left: 5px;
    margin-right: -5px;

`

export const RightBox = styled(FlexCenterDivision)`
    width: 100px;
    height: 60px;
    margin-left: -5px;
    margin-right: 5px;
`