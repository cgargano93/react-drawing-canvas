import React from 'react';
import styled from '@emotion/styled';
import ClearButton from './clearbutton';
import ColorButton from './colorbutton';
import UndoButton from './undobutton';
import RedoButton from './redobutton';
import ScreenButton from './screenbutton';


const Toolbox = ({cref, changeCol, undoFunction, redoFunction}) => {

    const ToolB = styled.div`
        position: absolute;
        background-color: white;
        display: inline;
        padding: 20px;
        margin:0px;
        align-items: center;
        border: 5px outset lightgray;
        border-radius: 20px;
    `
    const Palette = styled.div`
        align-items: center;
        display: inline;
        vertical-align: middle;
        display: table-row;
    `
    return (
        <ToolB>
            <ClearButton cref={cref}/>
            <UndoButton undoFunction={undoFunction}/>
            <RedoButton redoFunction={redoFunction}/>
            <ScreenButton/>
            <Palette>
                <ColorButton cref={cref} changeCol={changeCol} color="black"/>
                <ColorButton cref={cref} changeCol={changeCol} color="darkred"/>
                <ColorButton cref={cref} changeCol={changeCol} color="tomato"/>
                <ColorButton cref={cref} changeCol={changeCol} color="orange"/>
                <ColorButton cref={cref} changeCol={changeCol} color="yellow"/>
                <ColorButton cref={cref} changeCol={changeCol} color="limegreen"/>
                <ColorButton cref={cref} changeCol={changeCol} color="lightgreen"/>
                <ColorButton cref={cref} changeCol={changeCol} color="aquamarine"/>
                <ColorButton cref={cref} changeCol={changeCol} color="skyblue"/>
                <ColorButton cref={cref} changeCol={changeCol} color="DodgerBlue"/>
                <ColorButton cref={cref} changeCol={changeCol} color="blue"/>
                <ColorButton cref={cref} changeCol={changeCol} color="white"/>
            </Palette>
        </ToolB>
    );
}
export default Toolbox;