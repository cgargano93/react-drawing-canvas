import React, {useState, useEffect} from 'react';
import UndoCanvas from 'undo-canvas';

const DrawingCanvas = ({canvasRef,contextRef,pencilColor, pencilLine, pencilWidth}) => {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect( (pencilColor,pencilLine,pencilWidth)=> {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth *2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const context = canvas.getContext("2d");
    //Enable undo on context
    UndoCanvas.enableUndo(context);
    //**********************
    context.scale(2,2);
    context.linecap = pencilLine;
    context.strokeStyle = pencilColor;
    context.lineWidth = pencilWidth;
    contextRef.current = context;
    console.log(pencilWidth);
    // eslint-disable-next-line
  }, []);

    const startDrawing = ({nativeEvent}) => {
        contextRef.current.putTag(); //For UNDO/REDO
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
        //TEST
        console.log(pencilWidth);
        console.log(pencilColor);
    };
    
    const endDrawing = () => {
        contextRef.current.putTag(); //For UNDO/REDO
        contextRef.current.closePath();
        setIsDrawing(false);
    };
    
    // const Undo = () => {
    //     contextRef.current.undoTag(); //For UNDO
    // };
    
    // const Redo = () => {
    //     contextRef.current.redoTag(); //For REDO
    // };
    
    const Draw = ({nativeEvent}) => {
        if(!isDrawing) {
          return;
        }
        const {offsetX,offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX,offsetY);
        contextRef.current.stroke();
    };

    return(
        <canvas id="canv"
            onMouseDown = {startDrawing}
            onMouseUp = {endDrawing}
            onMouseMove = {Draw}
            ref={canvasRef}
        />
    );
}
export default DrawingCanvas;