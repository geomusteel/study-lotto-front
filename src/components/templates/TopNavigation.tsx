import React from 'react';
import TopMenuGroup from "../molecules/TopMenuGroup"
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    width: 580px;
    background-image: linear-gradient(to right, #ff6600, #ff983f);
`;

const TopNavigation = () => {
    return (
        <Wrapper>
            <div style={{
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white"
            }}>Todo
            </div>
            <TopMenuGroup/>
        </Wrapper>
    );
};

export default TopNavigation;