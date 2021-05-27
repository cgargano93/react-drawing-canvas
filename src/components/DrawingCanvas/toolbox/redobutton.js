import React from 'react';
import styled from '@emotion/styled';

const RedoButton = ({redoFunction}) => {
    const RedoButton = styled.button`
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
        <RedoButton onClick={redoFunction}><h2>Redo</h2></RedoButton>
    );
}
export default RedoButton;