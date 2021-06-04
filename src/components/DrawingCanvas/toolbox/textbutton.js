import React from 'react';
import styled from '@emotion/styled';

const TextButton = ({cref, color, changeWidth, width}) => {
    const TextB = styled.button`
        border: none;
        width: 160px;
        padding-right: 20px;
        padding-left: 20px;
        margin-right: 5px;
        align-items: center;
        background: darkred;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    `
    const WriteText = () => {
        var canvas = cref.current;
        var ctx = canvas.getContext("2d");
        ctx.lineWidth = width;
        changeWidth(width);
    };

    return (
        <TextB  onClick={WriteText}><h2>Text</h2></TextB>
    );
}
export default TextButton;