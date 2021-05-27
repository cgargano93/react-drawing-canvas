import React from 'react';
import styled from '@emotion/styled';

const ColorButton = ({cref, changeCol, color}) => {
    const ColorB = styled.button`
        border: 2px solid lightgrey;
        margin-left: 1px;
        margin-right: 1px;
        padding: 15px;
        border-radius: 10px;
        background: ${color};
        cursor: pointer;
    `
const ChangeColor = () => {
    var canvas = cref.current;
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    changeCol(color);
};

    return (
        <ColorB  onClick={ChangeColor}></ColorB>
    );
}
export default ColorButton;