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
        justifyContent: 'center',
        width: 200,
    });

    const stackStyles = mergeStyles({
        // background: DefaultPalette.themePrimary,
        // color: DefaultPalette.themePrimary,
        justifyContent: 'center',
        width: 200,
    });

    const ToolboxStackTokens = { childrenGap: 20 };
    const PaletteStackTokens = { childrenGap: 2 };


    return (
        <Stack tokens={ToolboxStackTokens} className={stackStyles}>
            <StackItem className={stackItemStyles}><ClearButton cref={cref}/></StackItem>
            <StackItem className={stackItemStyles}><UndoButton undoFunction={undoFunction}/></StackItem>
            <StackItem className={stackItemStyles}><RedoButton redoFunction={redoFunction}/></StackItem>
            <StackItem className={stackItemStyles}><ScreenButton/></StackItem>
            <Stack tokens={PaletteStackTokens}>
                <StackItem className={stackItemStyles}>
                    <ColorButton cref={cref} changeCol={changeCol} color="black"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="#303030"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="grey"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="lightgrey"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="white"/>
                </StackItem>
                <StackItem className={stackItemStyles}>
                    <ColorButton cref={cref} changeCol={changeCol} color="darkred"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="tomato"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="orange"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="yellow"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="limegreen"/>
                </StackItem>
                <StackItem className={stackItemStyles}>
                    <ColorButton cref={cref} changeCol={changeCol} color="lightgreen"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="aquamarine"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="skyblue"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="DodgerBlue"/>
                    <ColorButton cref={cref} changeCol={changeCol} color="blue"/>
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