import React from 'react';
import styled from "styled-components";
import {FlexCenterDivision} from "../../../common/div/FlexCenterDivision"

const Wrapper = styled(FlexCenterDivision)<{ $color: string; $isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    box-sizing: border-box;
    border: ${(props) => (props.$isOpen ? "none" : "1px solid #f0f0f0")};

    background-color: ${(props) => (props.$color)};;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    transition: 0.1s ease;


`

const InputBox = styled.input<{ $color: string; }>`

    width: 100%;
    height: 100%;
    border-radius: 4px;
    text-align: center;
    color: #ffffff;
    font-size: 20px;
    box-sizing: border-box;
    font-family: 'TheJamsil5Bold', serif;
    font-weight: 700;
    border: none;
    background-color: ${(props) => (props.$color)};;
    outline: none;

    &:focus {
        border: 2px solid #e6e6e6;
        color: #4c4c4c;
        background-color: white;
    }
`

interface Props {
    color: string;
    isOpen: boolean;
    number: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const BaseNumberSquareItem = ({isOpen, color, number, onChange, onBlur, onKeyDown}: Props) => {

    return (
        <Wrapper $color={color} $isOpen={isOpen}>
            <InputBox onChange={onChange}
                      $color={number === 0 ? "#f3f5f6" : color}
                      value={number === 0 ? '' : number}
                      type={"text"}
                      maxLength={2}
                      onBlur={onBlur}
                      onKeyDown={onKeyDown}
            />
        </Wrapper>
    );
};

export default BaseNumberSquareItem;