import styled from "styled-components";
import {FlexCenterDivision} from "../../common/div/FlexCenterDivision"

export const Wrapper = styled(FlexCenterDivision)<{ $color: string; $isOpen: boolean }>`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    border: ${(props) => (props.$isOpen ? "none" : "1px solid #f0f0f0")};
    background-color: ${(props) => (props.$isOpen ? props.$color : "#f3f5f6")};
    color: #ffffff;
    font-size: 20px;

    box-sizing: border-box;

    font-family: 'TheJamsil5Bold',serif;
    font-weight: 700;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    cursor: pointer;
`