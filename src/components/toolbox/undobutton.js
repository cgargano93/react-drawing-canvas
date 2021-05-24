import React from 'react';
import styled from '@emotion/styled';

const UndoButton = ({undoFunction}) => {
    const UndoButton = styled.button`
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
        <UndoButton onClick={undoFunction}><h2>Undo</h2></UndoButton>
    );
}
export default UndoButton;