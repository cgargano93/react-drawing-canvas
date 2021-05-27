import React from 'react';
import styled from '@emotion/styled';

const ScreenButton = () => {
    const ScreenButton = styled.button`
        border: none;
        width: 160px;
        padding-right: 20px;
        padding-left: 20px;
        margin-right: 5px;
        align-items: center;
        background: grey;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    `
    return (
        <ScreenButton ><h2>Screenshot</h2></ScreenButton>
    );
}
export default ScreenButton;