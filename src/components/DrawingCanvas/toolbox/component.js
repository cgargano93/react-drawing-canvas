import React from 'react';
import {Stack, StackItem, mergeStyles, DefaultPalette} from '@fluentui/react';

import ClearButton from './clearbutton';
import ColorButton from './colorbutton';
import UndoButton from './undobutton';
import RedoButton from './redobutton';
import ScreenButton from './screenbutton';
import WidthButton from './widthbutton';


const Toolbox = ({cref, pencilColor, changeCol, changeLine, changeWidth, undoFunction, redoFunction}) => {

    const stackItemStyles = mergeStyles({
        alignItems: 'center',
        // background: DefaultPalette.themePrimary,
        // color: DefaultPalette.themePrimary,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        width: 200,
      });

    const ToolboxStackTokens = { childrenGap: 10 };
    const PaletteStackTokens = { childrenGap: 5 };


    return (
        <Stack tokens={ToolboxStackTokens}>
            <ClearButton cref={cref}/>
            <UndoButton undoFunction={undoFunction}/>
            <RedoButton redoFunction={redoFunction}/>
            <ScreenButton/>
            <Stack tokens={PaletteStackTokens}>
                <StackItem className={stackItemStyles}>
                    <ColorButton cref={cref} changeCol={changeCol} color="black"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="darkred"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="tomato"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="orange"/>
                </StackItem>
                <StackItem className={stackItemStyles}>
                    <ColorButton cref={cref} changeCol={changeCol} color="yellow"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="limegreen"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="lightgreen"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="aquamarine"/>
                </StackItem>
                <StackItem className={stackItemStyles}>
                    <ColorButton cref={cref} changeCol={changeCol} color="skyblue"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="DodgerBlue"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="blue"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="white"/>
                </StackItem>
            </Stack>
            <StackItem className={stackItemStyles}>
                <WidthButton cref={cref} changeWidth={changeWidth} color={pencilColor} width={2}/>
                <WidthButton cref={cref} changeWidth={changeWidth} color={pencilColor} width={5}/>
                <WidthButton cref={cref} changeWidth={changeWidth} color={pencilColor} width={10}/>
                <WidthButton cref={cref} changeWidth={changeWidth} color={pencilColor} width={20}/>
            </StackItem>
        </Stack>
    );
}
export default Toolbox;