import React from 'react';
import styled from '@emotion/styled';

const WidthButton = ({cref, color, changeWidth, width}) => {
    const WidthB = styled.button`
        border: ${20-width}px solid lightgrey;
        margin-left: 3px;
        margin-right: 3px;
        width: 0px;
        height: 0px;
        padding: ${width}px;
        border-radius: 20px;
        background: ${color};
        cursor: pointer;
    `
    const ChangeWidth = () => {
        var canvas = cref.current;
        var ctx = canvas.getContext("2d");
        ctx.lineWidth = width;
        changeWidth(width);
    };

    return (
        <WidthB  onClick={ChangeWidth}></WidthB>
    );
}
export default WidthButton;